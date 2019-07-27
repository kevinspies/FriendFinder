//todo
var friendData = require("../data/friends.js");


module.exports = function (app) {

    // Search for Specific Character (or all characters) then provides JSON
    app.get("/api/friends", function (req, res) {
        console.log("accessing api/friends!" + res.json(friendData));
        //testing stuff!
        // var a = +7;
        // console.log(a);
        // console.log(req.body);
    });

    // If a user sends data to add a new character...
    app.post("/api/friends", function (req, res) {
        console.log("posting to api/friends!");
        console.log(req.body);
        friendData.push(req.body);
        res.json(true);
    });
};
