var mysql = require("mysql");
var express = require('express');
var app = express();
var submission
var difference = []
var match
var closest
var matchname

//you need this to be able to process information sent to a POST route
	var bodyParser = require('body-parser');

	// parse application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({ extended: true }));

	// parse application/json
	app.use(bodyParser.json());

var path = require("path");

// Serve static content for the app from the "public" directory in the application directory.
// you need this line here so you don't have to create a route for every single file in the public folder (css, js, image, etc)
//index.html in the public folder will over ride the root route
app.use(express.static("public"));

// Initializes the connection variable to sync with a MySQL database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "redacted",
  database: "friendfinder_db"
});

app.get('/questions', function(req, res){
    connection.query(
        "SELECT * FROM questions",
        function(err, response) {
          res.json(response);
        }
      );
  });

  app.get('/answers', function(req, res){
    connection.query(
        "SELECT * FROM answers",
        function(err, response) {
var submission = response[response.length - 1]
// res.json(response);

for (var i=0; i<response.length - 1; i++){

    difference.push((Math.abs(submission.answer1 - response[i].answer1)) + (Math.abs(submission.answer2 - response[i].answer2)) + (Math.abs(submission.answer3 - response[i].answer3)) + (Math.abs(submission.answer3 - response[i].answer3)) + (Math.abs(submission.answer4 - response[i].answer4)) + (Math.abs(submission.answer5 - response[i].answer5)) + (Math.abs(submission.answer6 - response[i].answer6)) + (Math.abs(submission.answer7 - response[i].answer7)) + (Math.abs(submission.answer8 - response[i].answer8)) + (Math.abs(submission.answer9 - response[i].answer9)) + (Math.abs(submission.answer10 - response[i].answer10)))

}

    // difference.push(response[i].answer1)



// difference.push((Math.abs(submission.answer1 - response[0].answer1)) + (Math.abs(submission.answer2 - response[0].answer2)))
// difference.push(submission.answer2 - response[0].answer2)
console.log(difference)
var closest = Math.min.apply(null, difference)
console.log(closest)
var match = difference.indexOf(closest);
console.log(match)
console.log(response[match].username)
var matchname = response[match].username

            // console.log(JSON.stringify(response.length - 1))
            res.send((matchname + " is your friend match!"))
        }
      );
  });

  app.post('/submit', function(req, res){
    // res.json(req.body);
  
    connection.query(
        "INSERT INTO answers (username, answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
        [req.body.username, req.body.answer1, req.body.answer2, req.body.answer3, req.body.answer4, req.body.answer5, req.body.answer6, req.body.answer7, req.body.answer8, req.body.answer9, req.body.answer10],
        function(err, response) {
          res.redirect('/answers');
        }
      );
  });

 

  app.get('/results', function(req, res){

    res.send(JSON.stringify(matchname))
    console.log(match)

  });





app.listen(3000, function(){
	console.log('listening on 3000');
});









