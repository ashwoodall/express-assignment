var express = require("express");
var app = express();

// "/" => "Hi there, welcome to my assignment"
app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment");
})

//5 animal routes using DRY code
app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig = "Oink",
        cow = "Moo",
        dog = "Woof Woof",
        snake = "Sss",
        bird = "Chirp"
    };
    var sound = sounds[animal];
    
    res.send("The " + animal + " says " + sound);
})

//multiple routes, first is word to be repeated, second is number of times
app.get("/repeat/:word/:times", function(req, res){
    var word = req.params.word;
    var times = Number(req.params.times);
    var result = "";
    for (var i = 0; i <= times; i++){
        result += (word + " ");
    }
    res.send(result);
})


//* route
app.get("*", function(req, res){
    res.send("Sorry, page not found... What are you doing with your life?");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
});