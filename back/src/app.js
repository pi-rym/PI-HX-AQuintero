const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const router = require('./routes/index');

const server = express();

server.use(morgan('dev'));

// server.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header(
//      'Access-Control-Allow-Headers',
//      'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   res.header(
//      'Access-Control-Allow-Methods',
//      'GET, POST, OPTIONS, PUT, DELETE'
//   );
//   next();
// });

server.use(cors());

server.use(express.json());

server.use('/rickandmorty', router);

/* 
request --> morgan --> cors --> express.json() --> ruta (path)
req           req       req         req
*/

module.exports = server;