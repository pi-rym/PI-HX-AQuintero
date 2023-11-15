const axios = require("axios");
const API_KEY = "pi-hx-aquintero";

const getCharById = (res, id) => {
  axios(`https://rym2.up.railway.app/api/character/${id}?key=${API_KEY}`)
    .then(({ data }) => {
      const { name, gender, species, origin, image, status } = data;
      const character = { id, name, gender, species, origin, image, status };

      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(character));
    })
    .catch((err) => {
      res.writeHead(404, { "Content-Type": "text/plain" });
      return res.end(err.message);
    });
};

module.exports = getCharById;
