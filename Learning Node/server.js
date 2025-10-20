const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/submit-student-data", (req, res) => {
  const name = req.body.firstName + " " + req.body.lastName;
  res.send(`${name} Submitted Successfully`);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Node server is running on port ${PORT}`);
});
