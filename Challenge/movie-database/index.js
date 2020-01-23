const express = require("express");
const app = express();
const port = 3000;

let movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الإرهاب والكباب‎", year: 1992, rating: 6.2 }
];

const getDate = () => {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();

  return `${hours}:${minutes}`;
};

app.get("/test", (req, res) => {
  res.json({ status: 200, message: "ok" });
});

app.get("/time", (req, res) => {
  console.log(res.params);
  res.json({ status: 200, message: getDate() });
});

app.get("/hello/:id", (req, res) => {
  let id = req.params.id;
  res.json({ status: 200, message: `Hello, ${id}` });
});

app.get("/search", (req, res) => {
  let search = req.query.s;
  console.log(req.params);
  console.log(search);

  if (search) {
    res.json({ status: 500, message: "ok", data: search });
  } else {
    res.json({
      status: 200,
      message: "you have to provide a search",
      error: true
    });
  }
});

app.get("/movies/add", (req, res) => {
  let new_movie = {
    title: req.query.title,
    year: req.query.year,
    rating: req.query.rating
  };

  new_movie.rating == undefined ? (new_movie.rating = 4) : new_movie.rating;

  if (
    new_movie["title"] == undefined ||
    new_movie["year"] == undefined ||
    new_movie.year.length != 4 ||
    isNaN(new_movie.year)
  ) {
    res.json({
      status: 403,
      error: true,
      message: "you cannot create a movie without providing a title and a year"
    });
  } else {
    new_movie.year = parseInt(new_movie.year);
    new_movie.rating = parseInt(new_movie.rating);
    movies.unshift(new_movie);
    res.json({ status: 200, data: movies });
  }
});

app.get("/movies/get", (req, res) => {
  res.json({ status: 200, data: movies });
});

app.get("/movies/get/id/:id", (req, res) => {
  let id = req.params.id;
  let result = -1;
  movies.forEach(movie => {
    if (movie.title == id) {
      result = movie;
    }
  });

  if (result !== -1) {
    res.json({ status: 200, data: result });
  } else {
    res.json({ status: 404, message: `The movie id ${id} does not exist` });
  }
});

app.get("/movies/get/by-date", (req, res) => {
  const SortedByDate = movies.sort((a, b) => a.year - b.year);
  res.json({ status: 200, data: SortedByDate });
});

app.get("/movies/get/by-rating", (req, res) => {
  const SortedByRating = movies.sort((a, b) => a.rating - b.rating);
  res.json({ status: 200, data: SortedByRating });
});

app.get("/movies/get/by-title", (req, res) => {
  const SortedByTitle = movies.sort((a, b) => a.title.length - b.title.length);
  res.json({ status: 200, data: SortedByTitle });
});

app.get("/movies/edit", (req, res) => {
  res.send("edit");
});

app.get("/movies/delete", (req, res) => {
  let index = req.query.id - 1;
  if (movies[index]) {
    movies.splice(index, 1);
    res.json({ status: 200, data: movies });
  } else {
    res.json({
      status: 404,
      error: true,
      message: "the movie <ID> does not exist"
    });
  }
});

app.listen(port, () => console.log(`listening to port ${port}`));
