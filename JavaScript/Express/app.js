const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { check, validationResult } = require("express-validator/check");
const mongojs = require("mongojs");
const db = mongojs("expressapp", ["users"])
const ObjectId = mongojs.ObjectId

let app = express();

/*let logger = function(req, res, next){
  console.log("Logging..");
  next();
}
app.use(logger);*/

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set static path
app.use(express.static(path.join(__dirname, "public")))

// Global variables
app.use(function(req, res, next){
  res.locals.errors = null;
  next();
});

app.get("/", function (req, res) {
  db.users.find(function (error, docs) {
    res.render("index", {
      title: "Customers",
      users: docs
    });
  });
});

app.post("/users/add", [
  check("first_name").isLength({ min: 1 }).withMessage("First Name is Required!"),
  check("last_name").isLength({ min: 1 }).withMessage("Last Name is Required!"),
  check("email").isEmail().withMessage("Email is Required!")
], (req, res) => {
  let errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.render("index", {
      title: "Customers",
      users: [],
      errors: errors.array()
    });
  } else {
    let newUser = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
    };
    db.users.insert(newUser, function (error, result) {
      if (error) {
        console.log(error);
      }
      res.redirect("/");
    });
  }
});

app.delete("/users/delete/:id", function(req, res){
  db.users.remove({_id: ObjectId(req.params.id)}, function(erorr, result){
    if(error){
      console.log(error);
    }
    res.send();
  });
});

app.listen(3000, function () {
  console.log("server started on Port 3000");
});