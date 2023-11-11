const http = require("node:http");
const fs = require("node:fs");

const desiredPort = process.env.PORT ?? 3000;

const processRequest = (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  if (req.url === "/") {
    res.statusCode = 200; // ok
    res.end("Bienvenido a mi página de incio");
  } else if (req.url === "/contacto") {
    res.statusCode = 200;
    res.end("<h1>Contacto</h1>");
  } else if (req.url === "/imagen-del-mas-capo.jpg") {
    fs.readFile("./fullstackdeveloper.jpeg", (err, data) => {
      //data seria un buffer, esta como en un espaciecito de memoria aislado mientras lo codificamos en el navegador con el header que le enviamos
      if (err) {
        res.statusCode = 500;
        res.end("<h1>500 internal server error</h1>");
      } else {
        res.setHeader("Content-Type", "image/jpeg");
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.end("<h1>404</h1>");
  }
};

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
  console.log(
    `server listening on port: http://localhost:${desiredPort} well done!!`
  );
});
