const http = require("node:http");
const dittoJson = require("./pokemon/ditto.json");
const processRequest = (req, res) => {
  const { method, url } = req;

  switch (method) {
    case "GET":
      switch (url) {
        case "/pokemon/ditto":
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          return res.end(JSON.stringify(dittoJson));
          break;

        default:
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          return res.end("<h1>404</h1>");
          break;
      }
      break;
    case "POST":
      switch (url) {
        case "/pokemon": {
          let body = "";

          req.on("data", (chunk) => {
            body += chunk.toString();
          });

          req.on("end", () => {
            const data = JSON.parse(body);
            // suponiendo que llamamos a una base de datos para guardar la info
            res.writeHead(201, {
              "Conten-Type": "application/json; charset=utf-8",
            });
            data.timeStamp = Date.now();
            res.end(JSON.stringify(data));
          });
          break;
        }

        default:
          res.statusCode = 404;
          res.setHeader("Conten-Type", "text/plain; charset=utf-8");
          return res.end("404 not found");
          break;
      }
      break;
    default:
      break;
  }
};

const server = http.createServer(processRequest);

server.listen(1234, () => {
  console.log(`server listening on: http://localhost:1234`);
});
