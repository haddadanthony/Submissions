const express = require("express");
const app = express();
const port = 3000;

const movies = [
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
  res.send("add");
});

app.get("/movies/get", (req, res) => {
  ``;
  res.json({ status: 200, data: movies });
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
  res.send("delete");
});

app.listen(port, () => console.log(`listening to port ${port}`));
