// update controller 
const { prisma } = require("../../db/prismaClient.js");

async function updateUserSavedGames(req, res, next) {

  console.log(req);
};


async function handleUpdateGamePlatforms(game, platformData) {

  const originalPlatform = await getOriginalPlatform(platformData.releaseOrderIds);

  if (platformData.platformIds) {
    const updatedGame = await prisma.game.update({
    where: { id: game.id },
    data: {
      platforms: {
      connect: platformData.platformIds.map((platform) => ({id: platform}))
      },
      originalPlatform: originalPlatform.name
     },
    });
    return updatedGame;
  }
};

async function getOriginalPlatform(releaseOrderIds) {

  releaseOrderIds.sort(function(a, b) {
    return a - b;
  });

  const first = releaseOrderIds.shift();

  const originalPlatform = await prisma.platform.findUnique({
      where: {releaseOrder: first},
    });
    return originalPlatform;
};

const {mapRating} = require('../../db/populateAllData.js');

async function handleUpdateGameAgeRating(ageRatingId, game) {

  const rating = mapRating(ageRatingId);

  if (rating !== null) {
    const updatedGame = await prisma.game.update({
      where: { id: game.id },
      data: {ageRatingId: rating},
    });
    return updatedGame;
  }
};

async function handleUpdateGameDeveloper(gameDeveloperId, game) {

  if (gameDeveloperId) {
    const updatedGame = await prisma.game.update({
      where: {id: game.id},
      data:{developerId: gameDeveloperId}
    });
    return updatedGame;
  }
};

module.exports = { updateUserSavedGames, handleUpdateGamePlatforms, handleUpdateGameAgeRating, handleUpdateGameDeveloper};