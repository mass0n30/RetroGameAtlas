const { Router } = require("express");
const gamesRouter = Router();
const {handleGetGames} = require('../controllers/viewController');


gamesRouter.get('/', handleGetGames);



module.exports = {gamesRouter};
