
let authenticationToken = null;

const apicalypse = require('apicalypse').default;
const { prisma } = require('../db/prismaClient.js');


async function getTwitchToken() {
  if (authenticationToken) {
    return authenticationToken;
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
  authenticationToken = data.access_token;
  process.env.TOKEN_EXP = data.expires_in;
  process.env.ACCESS_TOKEN = data.access_token;
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
  await delay(200);
  
  let year = 1993;
  let page = 1;

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


async function getGamesByYear(req, res, next, year, page) { 
  try {   
    const options = await requestOptions();
    const currentYear = year; 

    // setting pagination variables
    const currentPage =  page//  parseInt(req.query.page) || 1;

    console.log(`Getting games for: ${currentYear} Page ${currentPage}`)

    // items per page
    const pageSize = 500;
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
    .limit(500)
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

async function getGenre(game, options) {

  if (game.genres) {
    const response = await apicalypse(options)
    .fields('name, slug')
    .where(`id = ${game.genres[0]}`)
    .request('/genres')

    const genresResponse = await response.data;

    if (genresResponse) {
      return genresResponse;
    } else {
      return null;
    }
  }
  return null;
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



module.exports = { getGamesByYear, getGamesByPlatform, populateAllGames };