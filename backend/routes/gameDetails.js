const { Router } = require("express");
const gameDetailsRouter = Router();
const passport = require('passport');
const {handleGetGameDetails, handleGetGameData} = require('../controllers/viewController');

gameDetailsRouter.get('/:gameid', async (req, res, next) => {

 const gameDetails = await handleGetGameDetails(req, res, next);

  res.json({
    game: gameDetails,
  })
});

gameDetailsRouter.post('/data', async (req, res, next) => {
  
 const gameData = await handleGetGameData(req, res, next);

  res.json({
    game: gameData,
  })
});


 const { deleteGameById } = require('../controllers/dataController/deleteController.js');
 const {updateUserSavedGames, updateUserCompletedGames} = require('../controllers/dataController/updateController.js');

gameDetailsRouter.delete('/:gameid', async (req, res, next) => {
  await deleteGameById(req, res, next);
});

gameDetailsRouter.post('/:gameid', passport.authenticate('jwt', {session:false} ),  async (req, res, next) => {
  if (req.body.type == "save") {
      updatedProfile = await updateUserSavedGames(req, res, next);
  } else {
     updatedProfile = await updateUserCompletedGames(req, res, next);
  }

  res.json({
    updatedProfile: updatedProfile
  })
});




module.exports = {gameDetailsRouter};
