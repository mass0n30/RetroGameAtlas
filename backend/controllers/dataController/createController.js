// create controller 
const { prisma } = require("../../db/prismaClient.js");
const { validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");

async function handleCreateUser(req, res, next) {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(hashedPassword);
    const user = await prisma.user.create({
      data: {
        email: req.body.username,
        fname: req.body.firstname,
        lname: req.body.lastname,
        alias: req.body.alias,
        password: hashedPassword,
      }
   });

   await prisma.userProfile.create({
    data: {
      userId: user.id
    }
   });
  return res.status(201).json({ message: "Account Created Successfully" });
  } catch (error) {
    console.log('failed to create user');
    return res.status(400).json({ errors:error });
  }
};

  async function handleCreateCover(gameCover, game) {
    if (gameCover) {
      await prisma.cover.upsert({
        where: { igdbId: gameCover.id },
        create: {
          url: gameCover.url,
          gameId: game.id,
          imageId: gameCover.image_id,
          igdbId: gameCover.id,
          height: gameCover.height,
          width: gameCover.width
        },
        update: {
          url: gameCover.url,
          gameId: game.id,
          imageId: gameCover.image_id,
          height: gameCover.height,
          width: gameCover.width
        },
      });
    }
  };

  async function handleCreateScreenshots(gameScreenshots, game) {
    if (gameScreenshots) {
    await Promise.all(
      gameScreenshots.map(async (screenshot) => {
        await prisma.screenshot.upsert({
          where: { igdbId: screenshot.id },
          create: { 
            imageId: screenshot.image_id, 
            url: screenshot.url,
            height: screenshot.height,
            width: screenshot.width,
            gameId: game.id,
            igdbId: screenshot.id,
          },
          update: { 
            imageId: screenshot.image_id, 
            url: screenshot.url,
            gameId: game.id,
            height: screenshot.height,
            width: screenshot.width,
          },
        });
      })
    );
    }
  };

  async function handleCreateGenre(gameGenres, game) {

    if (gameGenres == null) {
      return
    }
    await Promise.all(
      gameGenres.map( async (genre) => {
       await prisma.genre.upsert({
          where: { igdbId: genre.id },
          update: { name: genre.name, slug: genre.slug },
          create: { igdbId: genre.id, name: genre.name, slug: genre.slug },
        })
      })
    );
    await prisma.game.update({
      where: { id: game.id },
      data: {
        genres: {
          connect: gameGenres.map((genre) => ({ igdbId: genre.id })),
        },
      },
    });
  };




module.exports = { handleCreateUser, handleCreateCover, handleCreateScreenshots, handleCreateGenre };