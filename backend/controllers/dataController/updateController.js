// update controller 
const { prisma } = require("../../db/prismaClient.js");

async function updateUserSavedGames(req, res, next) {

  const gameId = parseInt(req.params.gameid);
  const gameigdbID = (req.body.igdbId);

  // checking users saved games first
  const userProfile = await prisma.userProfile.findUnique({
    where: { userId: req.user.id },
    include: { savedGames: true }, 
  });

  const isSaved = userProfile.savedGames.some(game => game.igdbId === gameigdbID);

  if (isSaved) {
    const updatedUserProfile = await prisma.userProfile.update({
      where: {userId: req.user.id},
      data: {
        savedGames: {
          disconnect: {igdbId: gameigdbID}
        }
      }
    });
    return updatedUserProfile;

  } else {
    const updatedUserProfile = await prisma.userProfile.update({
      where: {userId: req.user.id},
      data: {
        savedGames: {
          connect: {igdbId: gameigdbID}
        }
      }
    });
    return updatedUserProfile;
  }
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