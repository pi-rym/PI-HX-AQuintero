const http = require("http");
const data = require("./utils/data");
const getCharById = require("./controllers/getCharById");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    // if (req.url.includes("/rickandmorty/character")) {
    //   const id = req.url.split("/").pop();
    //   const character = data.find((char) => char.id === Number(id));

    //   res.writeHead(200, { "Content-Type": "application/json" });
    //   res.end(JSON.stringify(character));
    // }

    const { url } = req;

    if (url.includes("/rickandmorty/character")) {
      const id = url.split("/").pop();
      getCharById(res, id);
    }

    //"/rickandmorty/character/1" => ['rickandmorty', 'character', 1] => 1
  })
  .listen(3001, () => {
    console.log("Estamos activos");
  });
