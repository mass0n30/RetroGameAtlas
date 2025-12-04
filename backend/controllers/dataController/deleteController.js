// delete controller 
const {prisma} = require("../../db/prismaClient.js");


const deleteGameById = async (req, res) => {
  const { gameid } = req.params.gameid;

  try {
    const deletedGame = await prisma.game.delete({
      where: { id: parseInt(req.params.gameid) },
    });

    res.status(200).json({ message: 'Game deleted successfully', game: deletedGame });
  } catch (error) {
    console.error('Error deleting game:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  deleteGameById,
};
