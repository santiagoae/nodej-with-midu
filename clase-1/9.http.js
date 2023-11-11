const http = require("node:http");
const { findAvailablePort } = require("./10.free-port");
console.log(process.env);

const desiredPort = process.env.PORT ?? 3000;
const server = http.createServer((req, res) => {
  console.log("request received");
  res.end("Hola mundo!");
});

findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    //el puerto 0 encuentra el primer puerto disponible
    console.log(
      `server listenin on port http://localhost:${server.address().port}`
    );
  });
});
