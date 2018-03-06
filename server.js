
var pgp = require("pg-promise")();
var db = pgp("postgres://client:qwerty@localhost:5432/project");
var http = require("http");

http.createServer( function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    db.many("SELECT id_name FROM equips")
        .then(function (data) {
            //response.write(data);
            console.log(JSON.stringify(data));
        })
        .catch(function (error) {
            //response.write("ERROR");
            console.log("ERROR:", error);
        });

    response.end();
}).listen(8888);
