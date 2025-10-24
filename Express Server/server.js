const express = require("express")
const bodyParser = require("body-parser")
const app = express();
const path = require("path")

app.use(bodyParser.urlencoded({ extended: false}))
app.get("/", (res) => {
      res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/about.html", (res) =>{
      res.sendFile(path.join(__dirname, "about.html"))
});
app.get("/contact.html", (res) =>{
      res.sendFile(path.join(__dirname, "contact.html"))
});
 const port = 3000;
 app.listen(port, () => {
      console.log(`Server running at port: ${port}`)
 });