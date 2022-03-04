const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();


app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res){
    res.render("index");
  });

app.get("/login", function(req, res){
    res.render("login");
  });

  app.get("/logout", function(req, res){
    alert("You are logout");
    res.render("index");
  });

// app.listen(3000,function(){
//     console.log("Running on port 3000");
// });

app.listen(process.env.PORT || 3000, function(){
  console.log("Running on port %d ", this.address().port,);
});
