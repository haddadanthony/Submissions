const express = require("express");
const app = express();
const port = 3000;

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

app.get("/search/:search?", (req, res) => {
  let search = req.params.search;
  if (search) {
    res.json({ status: 200, message: "ok", data: search });
  } else {
    res.json({ status: 500, message: "Search not provided", error: true });
  }
});

app.listen(port, () => console.log(`listening to port ${port}`));
