const http = require('http');
const data = require('./utils/data');

http
  .createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url.includes('/rickandmorty/character')) {
      const id = req.url.split('/').pop();
      const character = data.find((char) => char.id === Number(id));

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(character));
    }
  })
  .listen(3001, () => {
    console.log('Estamos activos');
  });
