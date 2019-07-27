//todo
var friendData = require("../data/friends.js");

module.exports = function (app) {

    // Search for Specific Character (or all characters) then provides JSON
    app.get("/api/friends", function (req, res) {
        console.log("hey i'm trying to access api friends!" + res.json(friendData));
    });

    // If a user sends data to add a new character...
    app.post("/api/friends", function (req, res) {
        console.log("hey i'm trying to post to api friends!");
    });
};