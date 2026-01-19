
let twitchAccessToken = null;
let twitchTokenExpiresAt = null;

const apicalypse = require('apicalypse').default;
const {prisma} = require("../db/prismaClient.js");

async function getTwitchToken() {
  const now = Date.now();

  if (twitchAccessToken && now < twitchTokenExpiresAt) {
    return twitchAccessToken;
  } else {
    const clientId = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;

  const response = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`, {
    method: 'POST'
  });

  if (!response.ok) {
    throw new Error('Failed to get Twitch token');
  }

  const data = await response.json();
  twitchAccessToken = data.access_token;
  twitchTokenExpiresAt = Date.now() + data.expires_in * 1000; 
  return data.access_token;
  }
};

async function requestOptions() {
  const token = await getTwitchToken();
  // console.log(token);
  return {
    queryMethod: 'body', 
    method: 'post',
    baseURL: 'https://api.igdb.com/v4',
    headers: {
      'Accept': 'application/json',
      'Client-ID': process.env.CLIENT_ID,
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'text/plain'
    },
  };
};

async function populateAllGames(req, res, next) {
  
  let year = 2009;
  let page = 32;

  while (year < 2013) {
    const results = await getGamesByYear(req, res, next, year, page);

    if (results) {
      page += 1;
    } else {
      year += 1;
      page = 1;
    }
  }
};

async function getGameGenres(gameIgdbId) {
  try {
    const options = await requestOptions();

    const response = await apicalypse(options)
      .fields('genres')
      .where(`id = ${gameIgdbId};`)
      .request('/games');

    const gameData = response.data[0];

    const genres = [];

    // finding and pushing genres from poplulated db
    for (let i=0; i<gameData.genres.length;i++) {
      const genre = await prisma.genre.findUnique({
        where: {igdbId:gameData.genres[i]}
      })

      if (genre) {
        genres.push(genre)
      }
    }

  return genres;

  } catch (error) {
    console.error('Error fetching game genres:', error);
    return null;
  }
}


async function getGamesByYear(req, res, next, year, page) { 
  try {   
    const options = await requestOptions();
    const currentYear = year; 

    // setting pagination variables
    const currentPage =  page//  parseInt(req.query.page) || 1;

    console.log(`Getting games for: ${currentYear} Page ${currentPage}`)

    // items per page
    const pageSize = 100;
    const offset = (currentPage - 1) * pageSize;

    const results = await apicalypse(options)
    .fields(`
      age_ratings,
      name,
      slug,
      summary,
      storyline,
      first_release_date,
      genres,
      platforms,
      cover,
      screenshots,
      rating,
      aggregated_rating,
      total_rating,
      total_rating_count,
      involved_companies,
      player_perspectives,
      url
    `)  // & total_rating > 70 & total_rating_count > 20;` (further filtering if needed)
    .where(`first_release_date >= ${new Date(currentYear, 0).getTime() / 1000} & first_release_date < ${new Date(currentYear + 1, 0).getTime() / 1000}`)
    .sort('total_rating desc')
    .limit(100)
    .offset(offset)

    .request('/games'); 


    const games = results.data;
    console.log(games.length);

    if (games.length > 0) {
      await saveGames(games);  
      return true;
    }

  } catch (error) {
    console.log(error)
  //   next(error);
  }
  return false;
};

async function getGamesByPlatform(req, res, next) { 
  try {   
  
    // setting pagination variables
    const page =  1// parseInt(req.query.page) || 1;

    // items per page
    const pageSize = 20;
    const offset = (page - 1) * pageSize;
    const options = await requestOptions();
    const platformId = 4; 
    const games = await apicalypse(options)
    .fields(`
      age_ratings,
      name,
      slug,
      summary,
      storyline,
      first_release_date,
      genres,
      platforms,
      cover,
      screenshots,
      rating,
      aggregated_rating,
      total_rating,
      total_rating_count,
      involved_companies,
      player_perspectives,
      url
    `) // & total_rating_count > 10; (further filtering)   
    .where(`platforms = ${platformId} `)
    .limit(pageSize)
    .offset(offset)
    .sort('total_rating desc')

    .request('/games'); 
    } catch (error) {
      console.log(error)
   // next(error);
  }
};   

const {allPlatFormsData, allDevelopersData  } = require('../db/populateAllData.js');


async function saveGame(gameData) {

  console.log(gameData.name);

  const game = await prisma.game.upsert({
    where: { igdbId: gameData.igdbId },
    create: gameData,
    update: gameData,
  });
  return game;
};

// prisma already imported above

// return if game is on any platforms, returning platform id's for map function
// !!!! perhaps only return the original release console ??
function filterGame(game) {
  const platformIds = [];
  const releaseOrderIds = [];

  for (i = 0; i < allPlatFormsData.length; i++) {
    for (j = 0; j < game.platforms.length; j++) {
      if (game.platforms[j] == allPlatFormsData[i].id) {
        platformIds.push(game.platforms[j]);
        releaseOrderIds.push(allPlatFormsData[i].releaseOrder);
      }
    }
  };
  if (platformIds.length > 0) {
    return {platformIds, releaseOrderIds};
  }
  return null;
};

// filter games by platforms
async function saveGames(games) {

  for (const single_game of games) {
    const platformData = filterGame(single_game);
    if (platformData) {
      await mapGameData(single_game, platformData);
    }
  }
  console.log('Done!');
};


async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// POST REQUESTS 

async function getCover(game, options) {
    await delay(80);
    if (game.cover) {
      const response = await apicalypse(options)
      .fields('url, game, image_id, width, height')  // image_id is used to coonstruct image URL 'fast responses'
      .where(`game = ${game.id};`)
      .request('/covers');

      const coverResponse = response.data[0];

      if (coverResponse) {
        return coverResponse;
      } else {
        return null;
      }
    }
    return null;
  };

async function getScreenshots(game, options) {
  if (game.screenshots) {
    await delay(200);
    const response = await apicalypse(options)
    .fields('url, game, image_id, height, width')
    .where(`game = ${game.id}`)
    .request('/screenshots')

    const screenshotsResponse = response.data;

    if (screenshotsResponse) {
      return screenshotsResponse;
    } else {
      return null;
    }
  }
  return null;
};


async function getGenre(igdbId, options) {

  if (!options) {
    options = await requestOptions();
  }

  const genres = await getGameGenres(igdbId);

  if (igdbId.genres) {
    for (let i = 0; i < igdbId.genres.length; i++) {
      await delay(50);
      const response = await apicalypse(options)
      .fields('name, slug')
      .where(`id = ${igdbId.genres[i]}`)
      .request('/genres')

      const genresResponse = await response.data[0];

      if (genresResponse) {
        genres.push(genresResponse);
      } 
    }
  }
  return genres;
};

async function getAgeRatingCategory(game, options) {

  if (game.age_ratings) {
    const response = await apicalypse(options)
    .fields('rating_category')
    .where(`id = ${game.age_ratings[0]}`)
    .request('/age_ratings')

    const ratingResponse = await response.data[0];

    if (ratingResponse) {
    return await getAgeRating(game, ratingResponse.rating_category, options);
    } 
  }
};

async function getAgeRating(game, id, options) {
  const response = await apicalypse(options)
  .fields('checksum,created_at,organization,rating,updated_at')
  .where(`id = ${id}`)
  .request('/age_rating_categories')

  const ratingResponse = await response.data;

  if (ratingResponse) {
  return ratingResponse[0].id;
  } 
};

async function getDeveloper(game, options) {
  if (game.involved_companies) {
    for (let i = 0; i < game.involved_companies.length; i++) {
     for (let j = 0; j < allDevelopersData.length; j++) {
        const developerId = await getCompanyId(game.involved_companies[i], options);
        if (developerId == allDevelopersData[j].id) {
          return developerId;
        }
      }
    }
  }
};

async function getCompanyId(id, options) {
  if (id) {
    
    await delay(150);
    const response = await apicalypse(options)
    .fields('company')
    .where(`id = ${id}`)
    .request('/involved_companies')

    const companiesResponse = await response.data;

    if (companiesResponse) {
      return companiesResponse[0].company;
    } else {
      return null;
    }
  };
}


const { handleCreateCover, handleCreateScreenshots, handleCreateGenre} = require('../controllers/dataController/createController.js');
const { handleUpdateGamePlatforms, handleUpdateGameAgeRating, handleUpdateGameDeveloper } = require('../controllers/dataController/updateController.js');

async function mapGameData(game, platformData) {

  const options = await requestOptions();

  const gameCover = await getCover(game, options);
  await delay(150);

  const gameScreenshots = await getScreenshots(game, options);
  await delay(150);

  const gameGenre = await getGenre(game, options);
  await delay(150);

  const gameAgeRating = await getAgeRatingCategory(game, options);
  await delay(150);

  const gameDeveloper = await getDeveloper(game, options);
  await delay(150);


  const gameCoverUrl = gameCover?.image_id
    ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${gameCover.image_id}.jpg`
    : null;

  
 // mapping game obj
  const gameData = {
    igdbId: game.id,
    name: game.name,
    slug: game.slug,
    summary: game.summary || null,
    storyline: game.storyline || null,
    firstReleaseDate: game.first_release_date
      ? new Date(game.first_release_date * 1000) 
      : null,
    coverUrl: gameCoverUrl,
    rating: game.rating || null,
    aggregatedRating: game.aggregated_rating || null,
    totalRatingCount: game.total_rating_count || null,
    url: game.url || null,
  };

  // updating DB 
  const savedGame = await saveGame(gameData);
  if (gameCover && gameCover.image_id) {
    await handleCreateCover(gameCover, savedGame);
  }
  // updating saved game from requested data
  await handleCreateScreenshots(gameScreenshots, savedGame);
  await handleCreateGenre(gameGenre, savedGame);
  await handleUpdateGamePlatforms(savedGame, platformData);
  await handleUpdateGameAgeRating(gameAgeRating, savedGame);
  await handleUpdateGameDeveloper(gameDeveloper, savedGame);
};

const { getGame, getGameByIGDB } = require('../db/queries.js');


async function getGameArtwork(gameigdbId) {
  try {
    const options = await requestOptions();

    const response = await apicalypse(options)
    .fields('animated,image_id,width,height,url')
    .where(`game = ${gameigdbId};`)
      .limit(10)
      .request('/artworks');

    const gameArtworkIds = response.data.map(artwork => artwork.image_id) || null;
    const gameWorkImages  =[];

    for (let i = 0; i < gameArtworkIds.length; i++) {
      gameWorkImages[i] = `https://images.igdb.com/igdb/image/upload/t_720p/${gameArtworkIds[i]}.jpg`;
    }

    return gameWorkImages;
  } catch(error) {
    console.error('Error fetching game artwork:', error);
    return null;
  }

}

async function getRelatedGames(gameigdbId, platforms, developer, genres, ageRating) {
  try {
    const options = await requestOptions();

    // fetching for franchise and similar games ids
    const response = await apicalypse(options)
      .fields('franchise, similar_games, videos' )
      .where(`id = ${gameigdbId};`)
      .request('/games');


    const gameData = response.data[0];
  

    if (!gameData) return { franchiseGames: null, similarGames: null };

    const franchiseId = gameData.franchise || null; // id is franchise id for request
    const similarGameIds = gameData.similar_games || [];

    // fetch for franchise games
    let franchiseGamesIds = null;
    if (franchiseId) {
      const franchiseResp = await apicalypse(options)
        .fields('id, name, cover, slug, platforms')
        .where(`franchise = ${franchiseId};`)
        .request('/games');
      franchiseGamesIds = franchiseResp.data.map(game => game.id) || null;
    }

    // fetch for game videos
    let gameVideos = null;
    if (gameData.videos && gameData.videos.length > 0) {
      gameVideos = [];
      for (let i = 0; i < gameData.videos.length; i++) {
        await delay(100);
        const videoResp = await apicalypse(options)
          .fields('video_id, name, game')
          .where(`id = ${gameData.videos[i]};`)
          .request('/game_videos');
        if (videoResp.data[0] ) {
          gameVideos.push(videoResp.data[0]);
        }
      }
    }

    // check my DB for franchise games
    let franchiseGames = null;
    if (franchiseGamesIds && franchiseGamesIds.length > 0) {
      console.log(franchiseGamesIds, 'ids');
      franchiseGames = [];
      for (let i = 0; i < franchiseGamesIds.length; i++) {
        const game = await getGameByIGDB(franchiseGamesIds[i]);
        if (game && game.igdbId !== gameigdbId) {
          franchiseGames.push(game);
        } else {
          continue;
        }
      }
    }

    // fetch for similar games
    const similarGames = [];
    if (similarGameIds.length > 0) {
      for (let i = 0; i < similarGameIds.length; i++) {
        if (franchiseGames && franchiseGames.length > 0) {
          const check = franchiseGames.find(g => g.igdbId === similarGameIds[i]);
          if (check) continue; // skip if already in franchise games
        }
        const game = await getGameByIGDB(similarGameIds[i]);
        if (game) similarGames.push(game);
      }
    }

    // look for additional game from same genre 
      const additionalSimilarGames = [];
      for (let i = 0; i < 100; i++) {
        const game = await getAdditionalSimilarGame(gameigdbId, genres, ageRating, platforms, developer);
        if (game && game.length > 0) {
          additionalSimilarGames.push(game);
        }
        if (additionalSimilarGames.length >= 10) {
          break;
        }
      }
      for (let i = 0; i < additionalSimilarGames.length; i++) {
        const existsInSimilar = similarGames.find(g => g.igdbId === additionalSimilarGames[i].igdbId);
        const existsInFranchise = franchiseGames ? franchiseGames.find(g => g.igdbId === additionalSimilarGames[i].igdbId) : null;
        const checkAlreadyAdded = additionalSimilarGames.find(g => g[0].igdbId === additionalSimilarGames[i][0].igdbId && g !== additionalSimilarGames[i]);
        if (checkAlreadyAdded) continue; // skip if already added from additional similar games
        if (!existsInSimilar && !existsInFranchise) {
          similarGames.push(additionalSimilarGames[i][0]);
        }
      }


    return { franchiseGames, similarGames, gameVideos };

  } catch (error) {
    console.error('Error fetching games:', error);
    return { franchiseGames: null, similarGames: null, gameVideos: null};
  }
}


async function getAdditionalSimilarGame(gameigdbId, genres, ageRating, platforms, developer) {

  let genre = {};

  const getRandomGenreIndex = Math.floor(Math.random() * genres.length);

  if (genres) {
    genre = genres[getRandomGenreIndex];
  }
  const ageRatingId = ageRating ? ageRating.id : null;
  const platformIds = platforms ? platforms.map(p => p.id) : [];
  const developerId = developer ? developer.id : null;

  // getting count of games in same genre, with same age rating, on same platforms
  const genreGameCount = await prisma.game.count({
    where: {
      genres: {
        some: {
          id:genre.id,
        },
      },
      ageRating: {
        id : ageRatingId || undefined,
      },
      platforms: {
        some: {
          id: { in: platformIds }
        }
      }, 
      developer: {
        id: developerId || undefined,
      },
      rating: { gte: 60 },
      totalRatingCount: { gte: 10 },
    },
  });

  // selecting a random offset to get a random game from same genre w/ same age rating
  const randomLimit = { min: 1, max: genreGameCount - 1 };
  const randomInt = Math.floor(Math.random() * (randomLimit.max - randomLimit.min + 1)) + randomLimit.min;

  // fetching the similar game
  const similarGame = await prisma.game.findMany({
    where: {
      igdbId: { not: gameigdbId },
      genres: {
        some: {
          id:genre.id,
        },
      },
      developer: {
        id: developerId || undefined,
      },
      platforms: {
        some: {
          id: { in: platformIds }
        }
      },
      ageRatingId: ageRatingId || undefined,
      rating: { gte: 60 },
      totalRatingCount: { gte: 5 },
    },
    skip: randomInt,
    take: 1,
  });

  return similarGame;
 
}



async function populateGameGenres() {
  try {
    const options = await requestOptions();

    // fetching all games from my DB
    const allGames = await prisma.game.findMany();

    for (let i = 0; i < allGames.length; i++) {
      const gameGenres = await getGenre(allGames[i], options);
      
      const fetchGenres = [];
      for (let j = 0; j < gameGenres.length; j++) {
        const genreInDb = await prisma.genre.findUnique({
          where: { igdbId: gameGenres[j].id }
        });
        if (genreInDb) {
          fetchGenres.push(genreInDb);
        }
      }
      await prisma.game.update({
        where: { id: allGames[i].id },
        data: {
          genres: {
            set: fetchGenres.map(g => ({ id: g.id })),
          },
        },
      });
      console.log(`Updated genres for game: ${allGames[i].name}`);  

    }

  } catch (error) {
    console.error('Error populating game genres:', error);
  }
}



module.exports = { getGamesByYear, getGamesByPlatform, populateAllGames, getGameArtwork, getRelatedGames, getGenre, populateGameGenres };