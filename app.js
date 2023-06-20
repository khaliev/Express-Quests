// IMPORTS
require("dotenv").config();
const express = require("express");

const movieHandlers = require("./movieHandlers");
const userHandlers = require("./userHandlers");

const app = express();

// express.json() est un middleware qui permet à toutes nos routes sont capables de lire un corps de requête au format JSON
app.use(express.json());

// FIN IMPORTS

const port = process.env.APP_PORT ?? 5001;

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};
// GET
app.get("/", welcome);
app.get("/api/movies", movieHandlers.getMovies);
app.get("/api/movies/:id", movieHandlers.getMovieById);
app.get("/api/users", userHandlers.getUsers);
app.get("/api/users/:id"), userHandlers.getUserById;

// POST
app.post("/api/movies", movieHandlers.postMovie);
app.post("/api/users", userHandlers.postUser);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
