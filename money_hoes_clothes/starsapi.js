function getStars(callback) {
  var endpoint = "http://star-api.herokuapp.com/api/v1/stars?max[distly]=49";
  request(endpoint, function(error, response, body) {
    if(error) {
      errorMessage = "Request failed. Make sure your api key is ok"
      callback(errorMessage);
      return;
    }

    result = JSON.parse(body)
    position = [];
    console.log('getting stars');
    for (i=0; i<result.length; i++){
      name = result[i]['label']
      var tempx = result[i]['x']
      var tempy = result[i]['y']
      var tempz = result[i]['z']
      position << {'x': x, 'y': y, 'z': z}
      luminosity = result[i]['lum']
      console.log('name:' + name + ' x: ' + tempx + ' y:' + tempy + ' z: ' + tempz + ' luminosity: ' + luminosity);
    }
  });
  console.log(result.length);
  callback(null, position);
}

module.exports = getStars();