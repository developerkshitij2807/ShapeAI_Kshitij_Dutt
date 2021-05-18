const express = require("express");

const bodyp =  require("body-parser");

const app = express();

app.use(bodyp.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req,res){
  var numb1 = Number(req.body.num1);
  var numb2 = Number(req.body.num2);
  var result = (numb2)/(numb1**2);
  res.send("Your BMI is: "+ result);
});


app.listen(3000, function(){
  console.log("Server has started on port 3000.")
});
