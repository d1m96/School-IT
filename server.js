
var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://postgres:123@localhost:8080/project");
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.sendfile('index.html');
});
    db.one("SELECT * from equips")
        .then(function (data) {
            //response.write(data);
            console.log(JSON.stringify(data));
        })
        .catch(function (error) {
            //response.write("ERROR");
            console.log("ERROR:", error);
        });
app.listen(8080);
