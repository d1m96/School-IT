var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://client:qwerty@localhost:5432/project");

db.one("SELECT * from users")
    .then(function (data) {
        console.log(JSON.stringify(data));
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });
