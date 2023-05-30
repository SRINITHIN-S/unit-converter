const express = require("express");
const bodyParser = require("body-parser");
const convert = require("convert-units");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const result = 0;
const from_unit ="";
const to_unit = "";

app.get("/", function(req, res){
    res.render("home",{result, from_unit, to_unit});
})
app.get('/temperature', (req, res) => {
    res.render('temperature',{result, from_unit, to_unit}); // Render the temperature.ejs template
  });

  app.get('/area', (req, res) => {
    res.render('area',{result, from_unit, to_unit}); // Render the temperature.ejs template
  });

  app.get('/volume', (req, res) => {
    res.render('volume', {result, from_unit, to_unit}); // Render the temperature.ejs template
  });

  app.get('/weight', (req, res) => {
    res.render('weight', {result, from_unit, to_unit}); // Render the temperature.ejs template
  });

  app.get('/time', (req, res) => {
    res.render('time', {result, from_unit, to_unit}); // Render the temperature.ejs template
  });



app.post("/:page", function(req, res){
    const from_unit = req.body.from_unit;
    const from_value = Number(req.body.from_value);
    const to_unit = req.body.to_unit;
    const page = req.params.page;
    const result = convert(from_value).from(from_unit).to(to_unit);
    res.render(page, {result, from_unit, to_unit} );
    
});


app.listen(3000, function(){
    console.log("server started at port 3000");
})