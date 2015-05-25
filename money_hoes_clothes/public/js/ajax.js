function ajax(){
  console.log("Sending request to server...")
  $.ajax({
    url: 'http://localhost:3000/index',
    method: 'GET',
    type: 'json',
    success: function(data) {
      console.log('ajax working');
      sphereMaker(data);
    }
  });
}

function getConstellations(){
  console.log("Sending request to server...")
  console.log(window.constellations);
  $.ajax({
    url: 'http://localhost:3000/constellations',
    method: 'GET',
    type: 'json',
    success: function(data) {
      console.log('got constellations');
      constellations(data);
      
    }
  });
}

function getConStars(){
  console.log("Sending request to server...")
  console.log(window.constellations);
  $.ajax({
    url: 'http://localhost:3000/constars',
    method: 'GET',
    type: 'json',
    success: function(data) {
      console.log('getting constellation stars');
      sphereMaker(data);
    }
  });
}


