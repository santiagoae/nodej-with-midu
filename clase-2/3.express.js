const express = require("express");
const jsonDitto = require("./pokemon/ditto.json");
const app = express();

const PORT = process.env.PORT ?? 1234;
app.disable("x-powered-by");
app.use(express.json()); //middleware de node, la parte de abajo es como trabaja internamente esta utilidad

//middleware, lo que hace es estar en el medio de las peticiones para hacer cosas antes de pasar a la peticion final
// app.use((req, res, next) => {
//   if (req.method !== "POST") return next();
//   if (req.headers["content-type"] !== "application/json") return next();
//   //aqui solo llegan request post y con el header application/json
//   let body = "";
//   //escucha el evento data y va pasando la data por pedazos
//   req.on("data", (chunk) => {
//     body += chunk.toString();
//   });

//   req.on("end", () => {
//     const data = JSON.parse(body);
//     data.timeStamp = Date.now();
//     req.body = data;
//     next();
//   });
// });

app.get("/pokemon/ditto", (req, res) => {
  res.json(jsonDitto); //detecta automaticamente cual es el contentype de la respuesta
  //   res.json({ message: "Mi Página" });
});

app.post("/pokemon", (req, res) => {
  //req.body se deberia guardar en bd
  res.status(201).json(req.body);
});

//esta es la ultima a la que va a llegar si no encuntra la ruta antes
app.use((req, res) => {
  res.status(404).send("<h1>Erro 404</h1>");
});

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
