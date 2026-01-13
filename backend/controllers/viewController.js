// viewController
const {prisma} = require("../db/prismaClient.js");

async function getUserProfile(req, res, next) {
  try {
    const userId = req.user?.id || req.params?.userId;

    if (!userId) {
      return res.status(400).json({ error: "Missing userId" });
    }

    const profile = await prisma.userProfile.findUnique({
      where: { userId: userId },
      select: {
        savedGames: {
          select: {
            id: true,
            name: true,
            coverUrl: true,
            igdbId: true,
            genres: { select: { id: true, name: true } },
            platforms: { select: { id: true, name: true, displayabbrev: true } },
          },
        },
        completedGames: {
          select: {
            id: true,
            name: true,
            genres: { select: { id: true, name: true } },
            platforms: { select: { id: true, name: true , displayabbrev: true} },
          },
        },
      },
    });


    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    return profile;
  } catch (error) {
    return next(error);
  }
}


async function getAllCategoryData(req, res, next) {

  try {
    const platforms = await prisma.platform.findMany({
      orderBy: {
        releaseOrder: 'asc'
      }
    }

    );
    const genres = await prisma.genre.findMany();
    const developers = await prisma.developers.findMany();

   
    const allData = [
        {
          category: "Consoles",
          array: platforms
        },
        {
          category: "Genres",
          array: genres
        },
        {
          category: "Developers",
          array: developers
        },
    ];

    return ({platforms, genres, developers, allData})
  } catch (error) {
    next(error);
  }

};

const { constructQueryByCategory, constructQueryArrays } = require( "../db/queries.js");


async function handleGetRandomGames(req, res, next) {
  try {
    const query = { ...req.query };

    const { genre, platform, developer, name, search, minyear, maxyear, offset, limit, order, dir } = query; 
    
    const queryArrays = await constructQueryArrays(req);

    if (minyear && maxyear) {
      var yearminStr = `${minyear}-01-01T00:00:00.000Z`;
      var yearmaxStr = `${maxyear}-12-31T23:59:59.999Z`;
      var yearMin =  new Date(yearminStr);
      var yearMax =  new Date(yearmaxStr);
    };

    const games = await prisma.game.findMany({
      where: {
        genres: genre && genre.length > 0
          ? { some: { id: { in: queryArrays.genreArray }}}
          : undefined,
        originalPlatform: platform && platform.length > 0
          ? { in: queryArrays.originalPlatformNames }
          : undefined,
        developer: developer && developer.length > 0
          ?  { id: { in: queryArrays.developerArray }} 
          : undefined,
        firstReleaseDate: {
          gte:yearMin,  //greater than date format
          lte:yearMax,  //lower than date format
        },
      },
      include: {
        screenshots: true,
      },
    });

    console.log(games.length, 'total games found for discover');

    const retrievedGames = [];
    const ints = [];

    for (let i = 0; i < parseInt(limit); i++) {
      const randomOffset = Math.floor(Math.random() * (games.length));

      const check = retrievedGames.some((game, index) => {
        if (game.id === games[randomOffset].id) {
          return true; 
        }
      });

      if (retrievedGames.length == 0) {
        retrievedGames.push(games[randomOffset]);
        continue;
      }

      if (check) {
        continue; // duplicate found, skip adding this game
      }
      // if no duplicates found, add to random games
      retrievedGames.push(games[randomOffset]);

    };
    console.log(retrievedGames.length, 'random games selected for discover');

    const randomGames = retrievedGames.map(game => {
      let randomSS = 0;
      const length = game.screenshots.length;

      const normalizedScreenshots = game.screenshots.map(ss => ({
        id: ss.id,
        gameId: ss.gameId,
        url: ss.url?.replace("t_thumb", "t_screenshot_big") ?? "",
        width: ss.width,
        height: ss.height,
      }));

      if (length && length != 0) {
        randomSS = Math.floor(Math.random() * (length));
        randomScreenshot = normalizedScreenshots[randomSS];
      }

      return {
        ...game,
        randomScreenshot,
        screenshots: normalizedScreenshots
      };
    });

    return randomGames;

    } catch (error) {
      next(error)
    }
  };


async function handleGetGames(req, res, next) {

  try {
    const query = { ...req.query };

    const { genre, platform, developer, name, search, minyear, maxyear, offset, limit, order, dir, discover } = query;

    if (discover === "true") {
      const games = await handleGetRandomGames(req, res, next);
      return res.json({ games });
    };

    console.log(`Fetching offset: ${offset}, limit: ${limit}`);

    // ordering Popular games with Rating sorting algorithm below
    let currentOrder = null;

    if (order == "Rating") {
      currentOrder = "Popularity"
    } else {
      currentOrder = order;
    }

    const orderBy = await constructQueryByCategory(currentOrder, dir);
    const queryArrays = await constructQueryArrays(req);
    const offsetCal = parseInt(offset) * parseInt(limit);

    // normalize search, replacing space to - for slugs 
    const searchTerm = search
      ?.toLowerCase()
      .trim()
      .replace(/\s+/g, "-"); 

    if (minyear && maxyear) {
      var yearminStr = `${minyear}-01-01T00:00:00.000Z`;
      var yearmaxStr = `${maxyear}-12-31T23:59:59.999Z`;
      var yearMin =  new Date(yearminStr);
      var yearMax =  new Date(yearmaxStr);
    }


let games = [];

  // if no category filters order all games with years, else category find games where category id's in array
if (!genre && !platform && !developer && !searchTerm) {
  games = await prisma.game.findMany({
    where: {
      firstReleaseDate: {
        gte:yearMin,  //greater than date format
        lte:yearMax,  //lower than date format
      },
    },
    include: {
      screenshots: true,
    },
    orderBy,

    take: parseInt(limit),
    skip: offsetCal,

    });

  } else {
     games = await prisma.game.findMany({
      where: {
        genres: genre && genre.length > 0
          ? { some: { id: { in: queryArrays.genreArray }}}
          : undefined,
        originalPlatform: platform && platform.length > 0
          ? { in: queryArrays.originalPlatformNames }
          : undefined,
        developer: developer && developer.length > 0
          ?  { id: { in: queryArrays.developerArray }} 
          : undefined,
        firstReleaseDate: {
          gte:yearMin,  //greater than date format
          lte:yearMax,  //lower than date format
        },
        slug: searchTerm && searchTerm !== ""
          ? { contains: searchTerm, mode: "insensitive" }
          : name && name !== "undefined"
          ? name
          : undefined,
      },
    include: {
      screenshots: true,
    },
      orderBy,
      take: parseInt(limit),
      skip: parseInt(offsetCal),
    });
  }

  if (order === "Rating") {

    games.sort((a, b) => {
      const scoreA = calculateWeightedRating(a.rating || 0, a.totalRatingCount || 0);
      const scoreB = calculateWeightedRating(b.rating || 0, b.totalRatingCount || 0);

      if (dir === "true") {
        return scoreB - scoreA; 
      } else {
        return scoreA - scoreB; 
      }
    });
  }


    const gamesResult = games.map(game => {
    let randomSS = 0;
    const length = game.screenshots.length;

    const normalizedScreenshots = game.screenshots.map(ss => ({
      id: ss.id,
      gameId: ss.gameId,
      url: ss.url?.replace("t_thumb", "t_screenshot_huge") ?? "",
      width: ss.width,
      height: ss.height,
    }));

    if (length && length != 0) {
      randomSS = Math.floor(Math.random() * (length));
      randomScreenshot = normalizedScreenshots[randomSS];
    }

    return {
      ...game,
      randomScreenshot,
      screenshots: normalizedScreenshots
    };
  });

  res.json({ games:gamesResult });

  } catch (error) {
    next(error)
  }
};


// Bayesian formula for weighted results for Rating
function calculateWeightedRating(itemRating, itemVotes) {
    // Estimated Global Average Rating (C) for most games
    const C = 75; 
    
    // Estimated Minimum Votes Required (m) for a reliable rating
    const m = 50; 
    
    const weightedRating = (itemRating * itemVotes + C * m) / (itemVotes + m);
    return weightedRating;
}

const {getAllWorldRecordRunTimes} = require('../services/speedrun.js');
const { getGamePrice} = require('../services/ebay.js');

async function handleGetGameOriginalPlatform(originalPlatform) {

  try {
    const originalPlatformObj = await prisma.platform.findUnique({
      where: {
        name: originalPlatform
      }
    });
    return originalPlatformObj;

  } catch (error) {
    next(error);
  }

}

const {getGenre} = require( "../services/twitch.js");


async function handleGetGameDetails(req, res, next) {

  const gameIgdbId = parseInt(req.params.gameIgdbId);

  const genres = await getGenre(gameIgdbId);

  try {

    const gameDetails = await prisma.game.findUnique({
      where: {
          igdbId: gameIgdbId
      },
      include: {
        screenshots: true,
        developer: true,
        platforms: true,
        ageRating: true,
      },
    });

    gameDetails.genres = genres;

    const normalizedScreenshots = gameDetails.screenshots.map(ss => ({
      id: ss.id,
      gameId: ss.gameId,
      url: ss.url?.replace("t_thumb", "t_screenshot_huge") ?? "",
      width: ss.width,
      height: ss.height,
    }));

    const originalPlatformObj = await handleGetGameOriginalPlatform(gameDetails.originalPlatform);

    const platformLogo = originalPlatformObj ? originalPlatformObj.platformLogo : null;
    const platformName = originalPlatformObj.displayabbrev;

    return {gameDetails, normalizedScreenshots, platformLogo, platformName, genres};
    
  } catch (error) {
    next(error);
  }
};

const { getRelatedGames } = require( "../services/twitch.js");

async function handleGetGameData(req, res, next) {
  const {gameId, gameigdbId, gameName, originalPlatform, platforms, developer, genres, ageRating } = req.body;

  const originalConsoleObj = await handleGetGameOriginalPlatform(originalPlatform);

  const consoleAbbrev = originalConsoleObj ? originalConsoleObj.abbreviation : null;

  try {
    const [worldRecord, gameEbayData, relatedGames] = await Promise.all([
      getAllWorldRecordRunTimes(gameName, consoleAbbrev), // speedrun data
      getGamePrice(gameName, originalPlatform), // ebay data
      getRelatedGames(gameigdbId, platforms, developer, genres, ageRating), // similar and franchise games from IGDB
    ]);

    return  {worldRecord, gameEbayData, relatedGames};
    
  } catch (error) {
    next(error);
  }

};


module.exports = {getUserProfile,handleGetGames, handleGetGameDetails, handleGetGameData, getAllCategoryData};