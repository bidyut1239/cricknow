var express = require("express");
var app = express();
var port = 3000;
var routes = require("./routes");
var path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.get('/', routes.home);
app.get('/searchPlayer', routes.searchPlayer);
app.get('/getQueryResult', routes.getQueryResult);
app.get('/player/:pid', routes.player);
// console.log(routes);

app.get('*', function(req, res) {
    res.send("URL Not Found");
});

app.listen(port, function() {
    console.log("App is running on Port:" + port);
});
