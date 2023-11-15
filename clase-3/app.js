const express = require("express");
const crypto = require("node:crypto");
const jsonMovies = require("./movies.json");
const movieSchema = require("./schemas/movies");

const app = express();
app.use(express.json());
app.disable("x-powered-by");
const PORT = process.env.PORT ?? 1234;

app.get("/", (req, res) => {
  res.json({ message: "Meloski!" });
});

app.get("/movies", (req, res) => {
  const { year } = req.query;
  if (year) {
    const movies = jsonMovies.results.filter(
      ({ releaseYear }) => releaseYear.year === Number(year)
    );
    if (movies) return res.json(movies);
    return res.status(404).json({ message: "Movie Not Found" });
  }
  res.json(jsonMovies);
});

app.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movie = jsonMovies.results.find(({ _id }) => _id === id);
  if (movie) return res.json(movie);

  return res.status(404).json({ message: "Movie not found" });
});

app.post("/movies", (req, res) => {
  const result = movieSchema.validateMovie(req.body);
  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) });
  }

  const newMovie = {
    _id: crypto.randomUUID(),
    id: "tt0056780",
    ...result.data,
  };

  jsonMovies.results.push(newMovie);

  res
    .status(201)
    .json({ messega: "Movie created successfully!!", movieAdded: newMovie });
});

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
