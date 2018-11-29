var express = require("express");
var router = express.Router();
let blogArray = [];
let id = 1;
/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.post("/create", function(req, res, next) {
  let body = req.body;
  body.id = id;
  id += 1;
  blogArray.push(body);
  console.log(blogArray);
  res.send("Array saved");
});
router.get("/read", function(req, res, next) {
  res.send("You are reading");
});
router.put("/update", function(req, res, next) {
  res.send("You are updating");
});
router.delete("/delete", function(req, res, next) {
  res.send("You are deleting");
});

router.get("/all", function(req, res, next) {
  res.send(blogArray);
});

module.exports = router;
