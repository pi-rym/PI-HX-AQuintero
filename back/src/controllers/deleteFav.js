const { Favorite } = require('../DB_connection');

const deleteFav = async (req, res) => {
  try {
    const { id } = req.params;

    await Favorite.destroy({ where: { id } });

    // const fav = await Favorite.findByPk(id);
    // await fav.destroy();

    const allFavs = await Favorite.findAll();

    return res.json(allFavs);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteFav;
