const { Router } = require("express");
const gameDetailsRouter = Router();
const {handleGetGameDetails} = require('../controllers/viewController');

gameDetailsRouter.get('/:gameid', async (req, res, next) => {

 const gameData = await handleGetGameDetails(req, res, next);

  res.json({
    game: gameData,
  })
});




module.exports = {gameDetailsRouter};
