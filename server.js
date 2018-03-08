var pgp = require("pg-promise")();
var db = pgp("postgres://client:qwerty@localhost:5432/project");
var http = require("http");
var fs = require("fs");

var time;
var speed;
var productivity;
var count;
var json = '{"speed":"", "productivity":"", "count":"", "datetime":""}';
json = JSON.parse(json);

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

        while(i < count) {
            console.log("PAUSE TIME " + (i+1) + " (IN MINUTES)" );
            t = new Date(time[i].begin_date);
            console.log(t.getHours()*60 + t.getMinutes());
            t = new Date(time[i].end_date);
            console.log(t.getHours()*60 + t.getMinutes());
            // добавить обработку случая, когда end_date < begin_date
            i++;
        }

        console.log("MAX SPEED: " + speed);
        console.log("TODAY'S PRODUCTIVITY: " + productivity);
        console.log(json);
    }



}).listen(8888);
console.log('listening on port 8888...');