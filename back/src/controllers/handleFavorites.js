let myFavorites = [];

const postFav = (req, res) => {
  myFavorites.push(req.body);
  return res.status(201).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;

  myFavorites = myFavorites.filter(
    (favorite) => Number(favorite.id) !== Number(id)
  );

  return res.json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};
