require('dotenv').config();
const express = require('express');
const path = require('path');
const expressSession = require("express-session");
const { PrismaSessionStore } = require('@quixo3/prisma-session-store');
const { PrismaClient } = require('./generated/prisma/client');
const passport = require("passport");
require("./config/passport"); // booting strategy before any initializing
const pgPool = require("./config/pool");
const cors = require('cors');


const {indexRouter} = require('./routes/index');
const {signupRouter} = require('./routes/signup');
const {homeRouter} = require('./routes/home');
const { name } = require('ejs');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));


app.use(cors({ // put client URL domain in .env eventually
  origin: ['https://retro-game-atlas.vercel.app', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("trust proxy", 1); // need to include with secure:true to trust Railway proxy before sending HTTPS request to Express Node.js

// https://expressjs.com/en/resources/middleware/session.html
app.use(
  expressSession({
   cookie: {
    maxAge: 7 * 24 * 60 * 60 * 1000, // ms
    httpOnly: true, // Prevents client-side JS from reading the cookie
    secure: true, // Only transmit cookie over HTTPS (essential for production)
    sameSite: "None", // Explicitly allow cross-site cookies (essential for separate F/E, B/E)
    },
    secret:  process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    store: new PrismaSessionStore(
      new PrismaClient(),
      {
        pool: pgPool,
        checkPeriod: 2 * 60 * 1000,  //ms
        dbRecordIdIsSessionId: true,
        dbRecordIdFunction: undefined,
      }
    )
  })
);

app.use(passport.session());  //enables persistent login sessions

app.use('/', indexRouter);
app.use('/sign-up', signupRouter);

app.use('/home', homeRouter);

app.post("/log-out", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return res.status(400);
    } 
    res.status(200).json({ message: "Logged out successfully" });
  });
});

// app level error handler for client side from next(errors) in any route
app.use((err, req, res, next) => {
  console.error(err.stack);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    message: err.message || 'Something went wrong!',
  });
});



app.listen(5000, () => console.log('Server started on port 5000'));