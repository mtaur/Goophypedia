// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require schemas
var Image = require("./models/Image");
//

var helpers = require('./app/utils/helpers.js');
var gooScrape = require('./nightmare.js');
var wikiQuery = require('./wikiparse.js');



// Create a new express app
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// -------------------------------------------------

// Database configuration with mongoose
    // localhost...
//mongoose.connect("mongodb://localhost/goophy-x001");
//mongoose.connect("mongodb://localhost/week18day3mongoose");
mongoose.connect("mongodb://heroku_9dnr272d:eqcj56l2npni9ute2k3sfcjdp8@ds037272.mlab.com:37272/heroku_9dnr272d");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});


//var images = [];


// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});


// This is the route we will send GET requests to retrieve our most recent click data.
// We will call this route the moment our page gets rendered
app.get("/api", function(req, res) {

    function send(obj) {res.send(obj);}

    wikiQuery('League of Legends', send);
/*

    var wtf_wikipedia = require("wtf_wikipedia");

//    wtf_wikipedia.parse(someWikiScript)
// {sections:[...], infobox:{}, categories:[...], images:[] }

//fetch wikipedia markup from api..
    wtf_wikipedia.from_api("League of Legends", "en", function(markup){
//    wtf_wikipedia.from_api("Toronto", "en", function(markup){
        var obj= wtf_wikipedia.parse(markup)
//        var mayor= obj.infobox.leader_name
        // "John Tory"
        console.log(obj);
        res.send(obj);

    });
*/



//  res.send(images);
//  res.sendFile(__dirname + "/public/index.html");

    //  res.sendFile(__dirname+ "/public/index.html"); //images);

  // This GET request will search for the latest clickCount
/*  Image.find({}).exec(function(err, doc) {

    if (err) {
      console.log(err);
    }
    else {
      // res.send(doc);
      console.log(doc);
    }
  });*/

});

app.post("/api", function(req,res) {

    function send(obj) {res.send(obj);}
    wikiQuery(req.body.searchStr, send);

//    wikiQuery('League of Legends', send);


});

// This is the route we will send POST requests to save each click.
// We will call this route the moment the "click" or "reset" button is pressed.
app.post("/imgapi", function(req, res) {

//  var title = 'wharrgarbl';  //req.body.clickID;
//  var link = 'http://i.imgur.com/FnC28.gif';  //parseInt(req.body.clicks);
//  var link = 'http://www.wharrgarbl.com/wharrgarbl.gif';  //parseInt(req.body.clicks);

//    var stateUpdate = req.body.stateFcn;

    console.log(req.body.searchStr, 'from server app.post');
//    console.log(req.body.stateFcn);
    var images=[];
//    res.send([{title:'bullshit',link:'http://www.damnit.com/blah.gif'}]);
    gooScrape(req.body.searchStr,4,
            function(item)
                {
                    images.push( {title:'(title)', link: item} ) ;
//                    req.body.stateFcn(images);
//                    helpers.update.main(images);
                }
                ,
            function(arr)
                {
                      images = arr;
                      images = images.map(function(item){ return {title:'(title)', link: item};  });
                      console.log('res.send this???',images);
//                      console.log('images[0]:',images[0]);
                      res.send(images);
                      console.log('Process terminated?');
//                    res.sendFile(__dirname + "/public/index.html");
//                    res.redirect('/');
                });


/*            function(item){
              images.push( {title:'(title)', link:item} );
              res.send(images);
            });*/


  // Note how this route utilizes the findOneAndUpdate function to update the clickCount
  // { upsert: true } is an optional object we can pass into the findOneAndUpdate method
  // If included, Mongoose will create a new document matching the description if one is not found

/*    // Save an empty result object
    var result = {};


    // Add the text and href of every link, and save them as properties of the result object
    result.title = title; //'image'+(images.length - 1);
    result.link = link; //images[images.length -1]; //$(this).children("a").attr("href");

    // Using our Article model, create a new entry
    // This effectively passes the result object to the entry (and the title and link)
    var entry = new Image(result);

    // Now, save that entry to the db
    entry.save(function(err, doc) {
        // Log any errors
        if (err) {
            console.log(err);
        }
        // Or log the doc
        else {
            console.log(doc);
        }
    });*/






/*  Images.findOneAndUpdate({
    title: title
  }, {
    $set: {
      link: link
    }
  }, { upsert: true }).exec(function(err) {

    if (err) {
      console.log(err);
    }
    else {
      res.send("Updated Click Count!");
    }
  });*/


});

// -------------------------------------------------

// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


//module.exports = images;