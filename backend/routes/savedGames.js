const { Router } = require("express");
const savedGamesRouter = Router();
const {getUserProfile} = require('../controllers/viewController');
const passport = require('passport');


savedGamesRouter.get('/', passport.authenticate('jwt', { session: false }), async (req, res, next ) => {
  const savedGames = await getUserProfile(req, res, next, req.user.id);

  res.json({
    savedGames
  });
});



module.exports = {savedGamesRouter};
