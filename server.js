const express = require("express");
const app = express();

const hostname = "127.0.0.1";
const PORT = process.env.PORT || 3030;

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}`);
});
