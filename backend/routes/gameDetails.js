const { Router } = require("express");
const gameDetailsRouter = Router();
const {handleGetGameDetails} = require('../controllers/viewController');

gameDetailsRouter.get('/:gameid', async (req, res, next) => {

 const gameData = await handleGetGameDetails(req, res, next);

  res.json({
    game: gameData,
  })
});

 const { deleteGameById } = require('../controllers/dataController/deleteController.js');

gameDetailsRouter.delete('/:gameid', async (req, res, next) => {
  await deleteGameById(req, res, next);
});




module.exports = {gameDetailsRouter};
