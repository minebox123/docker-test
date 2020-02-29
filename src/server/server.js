const express = require("express");
const path = require("path");
const cors = require("cors");
const port = 8888;
const app = express();

app.use(express.static(path.resolve(__dirname, "../public")));
app.get("/index.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.get("/products.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../products.html"));
});

app.get("/contacts.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../contacts.html"));
});

app.listen(port, () => console.log(`Server runs on http://localhost:${port}`));
