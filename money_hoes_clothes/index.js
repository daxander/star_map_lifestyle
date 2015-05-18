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

var port = 3000;
http.listen(port, function(){
    console.log('listening on *:'+port);
});
   

var stats = [];

function getStars() {
  var endpoint = "https://data.nasa.gov/resource/5bv2-dyn2.json?$where=distance_light_years<200&$limit=10000";
  // var endpoint = "http://star-api.herokuapp.com/api/v1/stars?max[distly]=100$limit=3000";
  request(endpoint, function(error, response, body) {
    if(error) {
      errorMessage = "Request failed. Make sure your api key is ok"
      callback(errorMessage);
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
      var luminosity = result[i]['lum']
      var color = result[i]['colorb_v']
      var distance = result[i]['distly']
      stats.push({'id': id, 'name': name, 'luminosity': luminosity, 'distance': distance, 'color': color, 'x': x, 'y': y, 'z': z})
    }
  });
}
getStars();


