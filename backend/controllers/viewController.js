// viewController
const {prisma} = require("../db/prismaClient.js");

async function getAllCategoryData(req, res, next) {

  try {
    const platforms = await prisma.platform.findMany();
    const years = [
      { id: 1, name: 1985 },
      { id: 2, name: 1986 },
      { id: 3, name: 1987 },
      { id: 4, name: 1988 },
      { id: 5, name: 1989 },
      { id: 6, name: 1990 },
      { id: 7, name: 1991 },
      { id: 8, name: 1992 },
      { id: 9, name: 1993 },
      { id: 10, name: 1994 },
      { id: 11, name: 1995 },
      { id: 12, name: 1996 },
      { id: 13, name: 1997 },
      { id: 14, name: 1998 },
      { id: 15, name: 1999 },
      { id: 16, name: 2000 },
      { id: 17, name: 2001 },
      { id: 18, name: 2002 },
      { id: 19, name: 2003 },
      { id: 20, name: 2004 },
      { id: 21, name: 2005 },
      { id: 22, name: 2006 },
    ];

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
        {
          category: "Years",
          array: years
        }
    ];

    return ({platforms, years, genres, developers, allData})
  } catch (error) {
    next(error);
  }

};


async function handleGetGames(req, res, next) {

  try {
    const { genre, platform, developer, name, search, minyear, maxyear, offset, limit } = req.query;

    // convert array query params to parsed arrays for Prisma query
    if (genre) {
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


  const offsetCal = offset * limit;

  // normalize search, replacing space to - for slugs 
  const searchTerm = search
    ?.toLowerCase()
    .trim()
    .replace(/\s+/g, "-"); 

  // if category find games where category id's in array
  const games = await prisma.game.findMany({
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
    take: parseInt(limit),
    skip: parseInt(offsetCal),
  });

  res.json({ games });

    
  } catch (error) {
    next(error)
  }
};

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