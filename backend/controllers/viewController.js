// viewController
const {prisma} = require("../db/prismaClient.js");

async function getAllCategoryData(req, res, next) {

  try {
    const platforms = await prisma.platform.findMany();
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

    return ({platforms, years, genres, developers, allData})
  } catch (error) {
    next(error);
  }

};


async function handleGetGames(req, res, next) {
  

  try {
    const query = { ...req.query };

    const { genre, platform, developer, name, search, minyear, maxyear, offset, limit, order, dir } = query;

    console.log(`Fetching offset: ${offset}, limit: ${limit}`);

    // convert array query params to parsed arrays for Prisma query
    if (req.query.genre) {
      if (Array.isArray(genre) && genre.length > 1) {
        var genreArray = genre.map((element) => parseInt(element));
      } else {
        var genreArray = [parseInt(genre)];
      }
    }

    if (platform) {
      if (Array.isArray(platform) && platform.length > 1) {
        var platformArray = platform.map((element) => parseInt(element));
      } else {
        var platformArray = [parseInt(platform)];
      }
    }

    if (developer) {
      if (Array.isArray(developer) && developer.length > 1) {
        var developerArray = developer.map((element) => parseInt(element));
      } else {
        var developerArray = [parseInt(developer)];
      }
    }

    if (minyear && maxyear) {
      var yearminStr = `${minyear}-01-01T00:00:00.000Z`;
      var yearmaxStr = `${maxyear}-12-31T23:59:59.999Z`;
      var yearMin =  new Date(yearminStr);
      var yearMax =  new Date(yearmaxStr);
    }

  const originalPlatforms = await prisma.platform.findMany({
      where: {
        id: {in: platformArray}
      },
      select: {
        name: true,
      }
    });

  const originalPlatformNames = originalPlatforms.map((plat) => {
    return plat.name;
  })

  console.log(originalPlatformNames);


  const offsetCal = parseInt(offset) * parseInt(limit);

  // normalize search, replacing space to - for slugs 
  const searchTerm = search
    ?.toLowerCase()
    .trim()
    .replace(/\s+/g, "-"); 

  // if no category filters order all games with years, else category find games where category id's in array

let games = [];

let orderBy = {};

if (order === "Release Date") {
  orderBy = {
    firstReleaseDate: {
      sort: dir === "true" ? "desc" : "asc",
      nulls: dir === "true" ? "last" : "first"
    }
  };
} else if (order === "Rating") {
  orderBy = [
    {
      rating: {
        sort: dir === "true" ? "desc" : "asc",
        nulls: dir === "true" ? "last" : "first",
      },
    },
    {
      totalRatingCount: {
        sort: dir === "true" ? "desc" : "asc",
        nulls: dir === "true" ? "last" : "first",
      },
    },
  ];
} else if (order === "Popularity") {
  orderBy = [
    {
      totalRatingCount: {
        sort: dir === "true" ? "desc" : "asc",
        nulls: dir === "true" ? "last" : "first"
      }
    },
    { id: 'asc' } // further sorting for any duplicate counts during pagination ordering
  ];
}

if (!genre && !platform && !developer && !searchTerm) {
  games = await prisma.game.findMany({
    where: {
      firstReleaseDate: {
        gte:yearMin,  //greater than date format
        lte:yearMax,  //lower than date format
      },
    },
    orderBy,

    take: parseInt(limit),
    skip: offsetCal,

    });

  } else {
     games = await prisma.game.findMany({
      where: {
        genres: genre && genre.length > 0
          ? { some: { id: { in: genreArray }}}
          : undefined,
        originalPlatform: platform && platform.length > 0
          ? { in: originalPlatformNames }
          : undefined,
        developer: developer && developer.length > 0
          ?  { id: { in: developerArray }} 
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
  res.json({ games });

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

async function handleGetGameDetails(req, res, next) {

  const gameId = parseInt(req.params.gameid);

  try {

    const gameDetails = await prisma.game.findUnique({
      where: {
        id: gameId
      },
      include: {
        screenshots: true,
        developer: true,
        platforms: true,
        ageRating: true,
      },
    });
    return gameDetails;
    
  } catch (error) {
    next(error)
  }
};



module.exports = {handleGetGames, handleGetGameDetails, getAllCategoryData};