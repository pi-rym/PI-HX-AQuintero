const server = require("./app");
const PORT = 3001;
const { conn } = require("./DB_connection");

conn.sync({ force: true }).then(() => {
  console.log("DB connect success");
  server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
