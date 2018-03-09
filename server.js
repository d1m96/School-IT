var express = require("express");
var bodyParser = require("body-parser");

var app = express();
// создаем парсер для данных в формате json
var jsonParser = bodyParser.json();

var pgp = require("pg-promise")();
var db = pgp("postgres://client:qwerty@localhost:5432/project");
var http = require("http");
var fs = require("fs");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");


var time;
var speed;
var productivity;
var count;
var json = '{"speed":"", "productivity":"", "count":"", "datetime":""}';
json = JSON.parse(json);

var express = require('express');
var app = express();


app.get("/*", function (request, response) {
    if(!request.query) return response.sendStatus(400);
    else {
        console.log(JSON.stringify(request.query));

        db.many("select begin_date, end_date\n" +
            "from work_calendars\n" +
            "where descr != 'Working';")
            .then(function (data) {
                time = data;
                time = JSON.stringify(time);
                time = JSON.parse(time);
            })
            .catch(function (error) {
                //response.write("ERROR");
                console.log("ERROR:", error);
            });
        db.many("select count(*) as v\n" +
            "from work_calendars\n" +
            "where descr != 'Working';")
            .then(function (data) {
                count = data;
            })
            .catch(function (error) {
                console.log("ERROR:", error);
            });
        db.many("select value from params join param_values on params.param_id = param_values.param_id where params.name = 'Max speed';")
            .then(function (data) {
                speed = data;
            })
            .catch(function (error) {
                console.log("ERROR:", error);
            });
        db.many("select value from params join param_values on params.param_id = param_values.param_id where params.name = 'Date production';")
            .then(function (data) {
                productivity = data;
            })
            .catch(function (error) {
                console.log("ERROR:", error);
            });

        var i = 0;
        var t;
        if(count !== undefined && speed !== undefined && time !== undefined) {
            count = count[0].v;
            productivity = productivity[0].value;
            speed = speed[0].value;
            json.speed = speed;
            json.count = count;
            json.productivity = productivity;
            json.datetime = time;

            //console.log(JSON.stringify(json));
        }

        //console.log(req.query);
        response.write('<b>My</b> first express http server' + JSON.stringify(json));

        var index = fs.readFileSync('./index.html');
        response.end(index);


    };

});

app.listen(8888);

/*
var pgp = require("pg-promise")();
var db = pgp("postgres://client:qwerty@localhost:5432/project");
var http = require("http");
var fs = require("fs");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");


var time;
var speed;
var productivity;
var count;
var json = '{"speed":"", "productivity":"", "count":"", "datetime":""}';
json = JSON.parse(json);

var express = require('express');
var app = express();

// on the request to root (localhost:8888/)

app.get('/', function (req, res) {

    /*
    db.many("select begin_date, end_date\n" +
        "from work_calendars\n" +
        "where descr != 'Working';")
        .then(function (data) {
            time = data;
            time = JSON.stringify(time);
            time = JSON.parse(time);
        })
        .catch(function (error) {
            //response.write("ERROR");
            console.log("ERROR:", error);
        });
    db.many("select count(*) as v\n" +
        "from work_calendars\n" +
        "where descr != 'Working';")
        .then(function (data) {
            count = data;
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        });
    db.many("select value from params join param_values on params.param_id = param_values.param_id where params.name = 'Max speed';")
        .then(function (data) {
            speed = data;
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        });
    db.many("select value from params join param_values on params.param_id = param_values.param_id where params.name = 'Date production';")
        .then(function (data) {
            productivity = data;
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        });

    var i = 0;
    var t;
    if(count !== undefined && speed !== undefined && time !== undefined) {
        count = count[0].v;
        productivity = productivity[0].value;
        speed = speed[0].value;
        json.speed = speed;
        json.count = count;
        json.productivity = productivity;
        json.datetime = time;

        //console.log(JSON.stringify(json));
    }

    console.log(req.query);
    res.send('<b>My</b> first express http server' + JSON.stringify(req.query));
});
    app.listen(8888);
*/
/*
http.createServer( function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html; charset=utf8"});
    var index = fs.readFileSync('./index.html');
    response.end(index);

    db.many("select begin_date, end_date\n" +
        "from work_calendars\n" +
        "where descr != 'Working';")
        .then(function (data) {
            time = data;
            time = JSON.stringify(time);
            time = JSON.parse(time);
        })
        .catch(function (error) {
            //response.write("ERROR");
            console.log("ERROR:", error);
        });
    db.many("select count(*) as v\n" +
        "from work_calendars\n" +
        "where descr != 'Working';")
        .then(function (data) {
            count = data;
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        });
    db.many("select value from params join param_values on params.param_id = param_values.param_id where params.name = 'Max speed';")
        .then(function (data) {
            speed = data;
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        });
    db.many("select value from params join param_values on params.param_id = param_values.param_id where params.name = 'Date production';")
        .then(function (data) {
            productivity = data;
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        });

    var i = 0;
    var t;
    if(count !== undefined && speed !== undefined && time !== undefined) {
        count = count[0].v;
        productivity = productivity[0].value;
        speed = speed[0].value;
        json.speed = speed;
        json.count = count;
        json.productivity = productivity;
        json.datetime = time;

        response.end(json);

<<<<<<< HEAD
       while(i < count) {
=======
        var begin_in_minutes = 0;
        var end_in_minutes = 0;

        while(i < count) {
>>>>>>> 7c0493f1f8f7bdbddbee344e7d10301a5906ca3d
            console.log("PAUSE TIME " + (i+1) + " (IN MINUTES)" );
            t = new Date(time[i].begin_date);
            begin_in_minutes = t.getHours()*60 + t.getMinutes();
            console.log(begin_in_minutes);
            t = new Date(time[i].end_date);
            end_in_minutes = t.getHours()*60 + t.getMinutes();
            if(end_in_minutes < begin_in_minutes) {     // если end_time на следующий день
              end_in_minutes += 24*60;
            }
            console.log(end_in_minutes);
            i++;
        }

       // console.log("MAX SPEED: " + speed);
        //console.log("TODAY'S PRODUCTIVITY: " + productivity);
       // console.log(json);
    }



<<<<<<< HEAD
});//.listen(8888);
console.log('listening on port 8888...');
*/
