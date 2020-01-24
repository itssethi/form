const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const db = fs.readFileSync("./db/db.json");
const path = require("path");

app.use(express.static("views"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

let dataFile = JSON.parse(db);
console.log(dataFile.users);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/form.html"));
});

app.post("/", (req, res) => {
  res.redirect("/");
  let obj = new Object(req.body);
  //   let obj = dataFile.users.push(new Object(req.body));
  let json = JSON.stringify(obj, null, 2);
  console.log(json);

  fs.writeFile(db, json, { flag: "a" }, err => {
    if (err) console.log(err);
    console.log("file written successfully.");
  });
});

app.listen(3000, () => console.log(`Example app listening on port 3000!`));
