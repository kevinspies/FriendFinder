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

    //waaaiiit i think this function needs to take a third paramater... the friggen userData from the jQuery part of survey script!!! mwahahahahahaha hope
    app.post("/api/friends", function (req, res) {
        console.log("posting to api/friends!");
        console.log("req.body: " + req.body);
        console.log("req: " + req);
        console.log("req.body.friendData: " + req.body.friendData);//undefined
        console.log("accessing the info from my apiRoute - req.body.name: " + req.body.name);
        // console.log("req.body.friendData: " + req.body.friendData.friendsArray); "error! error! extreeeme error!" - robot from jimmy neutron
        //hell why would it know, i need to pass this post another parameter
        friendData.push(req.body);

        var lowestScore = 0;//initializing a varialb eto represent our lowestScore aka our best match - the least difference between answers
        //we will set temp score to lowest score if its lower than the previous iterations temp score value, i think this will work!

        //compatibility logic here
        for (var i = 0; i < friendData.length; i++) {
            console.log("--------------------------------------------------");
            console.log("index " + i + " of friendArray: " + friendData[i]);
            console.log(friendData[i].name);
            console.log(friendData[i].photo);
            console.log(friendData[i].scores);
            if (tempScore) {
                if (tempScore)
            }
            var tempScore = compare(req.body.scores, friendData[i].scores);//here we'll hold a value representing a compatibilty score for each possible match
        }
        //plan... each iteration through the above loop will yield a compatibility score
        //our current friend, our submission, is located of course within req.body, so that is the one to compare against
        //this function will compare one array against another and yield a score
        function compare(arr1, arr2) {
            var sum = 0;
            for (var i = 0; i < arr1.length; i++) {
                var diff = Math.abs(arr1[i] - arr2[i]);//calcuatles the difference between their response at each index
                sum = sum + diff;//add that difference to sum we'll return that at the end as their compatibilty score
            }
            return sum;
        }







        res.json(true);
    });
};
