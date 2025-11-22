const { Router } = require("express");
const homeRouter = Router();
var jwt = require('jsonwebtoken');
const jwtDecode = require("jwt-decode");
const passport = require('passport');
require('../config/passport');
const {gamesRouter} = require('./games');
const {gameDetailsRouter} = require('./gameDetails');
const { getAllCategoryData } = require("../controllers/viewController.js");


homeRouter.get('/', passport.authenticate('jwt', { session: false }), async (req, res, next ) => {

  const categoryData = await getAllCategoryData(req, res, next);

  
  // req.user from passport callback authentication
  res.json({
    user: {
      alias: req.user.alias,
      first: req.user.fname,
      last: req.user.lname,
      admin: req.user.is_admin
    },
   categoryData: categoryData
  });
});

homeRouter.use('/games', gamesRouter);

homeRouter.use('/details', gameDetailsRouter);




module.exports = {homeRouter}