const { PrismaClient } = require('../generated/prisma/client');
const prisma = new PrismaClient();

async function checkEmail(value) {

  const user = await prisma.user.findUnique({
    where: {
      email: value,
    },
  });

  if (user) {
    return true;
  } else {
    return false;
  }
};

async function checkUser(id) {
  
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  if (user) {
    return user;
  } else {
    throw new Error("No found user.");
  }
};

async function checkUserByEmail(value) {

  const user = await prisma.user.findUnique({
    where: {
      email: value,
    },
  });

  if (user) {
    return user;
  } else {
    throw new Error("No found user.");
  }
};

async function checkGame(id) {
  
  const game = await prisma.game.findUnique({
    where: {
      id: id,
    },
  });

  if (game) {
    return game;
  } else {
    // fetchGame from IGDB API
    // throw new Error("No found game.");
  }
};

async function constructQueryByCategory(order, dir) {
      var orderBy = {}


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
    return orderBy;
  } 

async function constructQueryArrays(req) {
  const { genre, platform, developer } = req.query;

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

  // to fetch for games only for original platform instead of all platforms in array
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
  });
  return { genreArray, platformArray, developerArray, originalPlatformNames };

}

module.exports = {
  checkEmail,
  checkUser,
  checkUserByEmail,
  checkGame,
  constructQueryByCategory,
  constructQueryArrays
}