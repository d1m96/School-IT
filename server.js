var pgp = require("pg-promise")();
var db = pgp("postgres://client:qwerty@localhost:5432/project");
var http = require("http");

var time;
var speed;
var productivity;
var count;

http.createServer( function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    db.many("select begin_date, end_date\n" +
        "from work_calendars\n" +
        "where descr != 'Working';")
        .then(function (data) {
            time = data;
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
    response.end();
    var i = 0;
    if(count !== undefined && speed !== undefined && time !== undefined) {
        count = count[0].v;

        while(i < count) {
            console.log("PAUSE TIME " + (i+1) );
            console.log(time[i].begin_date);
            console.log(time[i].end_date);
            i++;
        }
        speed = speed[0].value;
        productivity = productivity[0].value;
        console.log("MAX SPEED: " + speed);
        console.log("TODAY'S PRODUCTIVITY: " + productivity);
    }


    // parse time to minutes
}).listen(8888);
