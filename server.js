var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controller/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("App listening at localhost:" + PORT);
});

// console.log(process.env.SECRET_MESSAGE);