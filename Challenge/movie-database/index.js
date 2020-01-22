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
  res.json({ status: 200, message: getDate() });
});

app.listen(port, () => console.log(`listening to port ${port}`));
