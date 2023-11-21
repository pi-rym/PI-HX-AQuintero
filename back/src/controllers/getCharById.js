const axios = require('axios');
const API_KEY = 'pi-hx-aquintero';
const URL = `https://rym2.up.railway.app/api/character/`;

const getCharById = async (req, res) => {
  // const { id }  = req.params;
  const id = Number(req.params.id);

  try {
    const { data } = await axios(`${URL}${id}?key=${API_KEY}`);
    const { name, status, gender, species, origin, image } = data;
    const character = { id, name, status, gender, species, origin, image };

    return character.name
      ? res.status(200).json(character)
      : res.status(404).send('Not found');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getCharById;
