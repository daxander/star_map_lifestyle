var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var request = require('request');
var constellations = require('./public/constellations.json');
console.log(constellations);
// var io = require('socket.io')(http);

app.use('/public', express.static('public'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname,"/index.html"), function(err){
    if (err){
      console.log(err);
    } else{
      console.log('its working');
    }
  });
});

app.get('/index', function(req, res){
  res.status(200).send(stats)
  res.end()
});

app.get('/constellations', function(req, res){
  res.status(200).send(constellations)
  res.end()
});

app.get('/constars', function(req, res){
  res.status(200).send(conStats)
  res.end()
});

app.get('/solar_system', function(req, res) {
  res.sendFile(path.join(__dirname,"/solar_system.html"), function(err){
    if (err){
      console.log(err);
    } else {
      console.log('solar_system working');
    }
  });
});

var port = 3000;
http.listen(port, function(){
    console.log('listening on *:'+port);
});
   

var stats = [];

function getStars() {
  var endpoint = "https://data.nasa.gov/resource/5bv2-dyn2.json?$where=distance_light_years<580&$limit=50000";
  // var endpoint = "http://star-api.herokuapp.com/api/v1/stars?max[distly]=100$limit=3000";
  request(endpoint, function(error, response, body) {
    if(error) {
      console.log("Request failed. Make sure your api key is ok")
      return;
    }

    var result = JSON.parse(body)
  
    console.log('getting stars');
    console.log(result.length);
    for (i=0; i<result.length; i++){
      var name = result[i]['label']
      var id = result[i]['id']
      var x = result[i]['x']
      var y = result[i]['y']
      var z = result[i]['z']
      var luminosity = result[i]['luminosity']
      var color = result[i]['colorb_v']
      var distance = result[i]['distance_light_years']
      stats.push({'id': id, 'name': name, 'luminosity': luminosity, 'distance': distance, 'color': color, 'x': x, 'y': y, 'z': z})
    }
  }); 
}

var conStats = [];

function getConst() {
  // $where=distance_light_years<500&$limit=50000
  var endpoint = "https://data.nasa.gov/resource/2dz7-w69j.json?";
  request(endpoint, function(error, response, body) {
    if(error) {
      console.log("Request failed. Make sure your api key is ok");
      return;
    }

    var result = JSON.parse(body)
  
    console.log('getting constellations');
    console.log(result.length);
    for (i=0; i<result.length; i++){
      var name = result[i]['label']
      var id = result[i]['id']
      var x = result[i]['x']
      var y = result[i]['y']
      var z = result[i]['z']
      var luminosity = result[i]['luminosity']
      var color = result[i]['colorb_v']
      var distance = result[i]['distance_light_years']
      var constId = result[i]['constellation_id']
      // var galaxy = result[i]['constellation_galaxy']
      // var constName = result[i]['constellation_name']
      conStats.push({'id': id, 'name': name, 'luminosity': luminosity, 'distance': distance, 'color': color, 'x': x, 'y': y, 'z': z, 'constId' : constId })
      // , 'constName' : constName, 'galaxy' : galaxy
    }
  });
}

getStars();
getConst();



