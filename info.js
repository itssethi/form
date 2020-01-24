const schema = require("./model/model");
const data = require("./form");
const fs = require("fs");
const file = require("./db/db.json");
const obj = {};

obj.push(...data);
let json = JSON.stringify(obj);
function submit() {
  fs.writeFileSync(file, json, { flag: "w" }, function() {
    console.log("File written successfully");
  });
}

module.exports = submit;
