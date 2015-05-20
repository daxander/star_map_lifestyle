function goHome() {
  console.log('h clicked');
  camera.position.set( 0, 0, 0 );
}


var constellationsOn = false;
function toggleConstellations() {
  console.log('c clicked');
  if (constellationsOn) {
    for (i=0; i<totalLines.length; i++) {
      scene.remove(totalLines[i]);
    }
  } else {
    for (i=0; i<totalLines.length; i++) {
      scene.add(totalLines[i]);
    }    
  }
  constellationsOn = !constellationsOn;
}


function speed(number){
  camControls.movementSpeed = number;

}

function findLocation() {
  var location = Math.sqrt((camera.position.x*camera.position.x)+(camera.position.y*camera.position.y)+(camera.position.z*camera.position.z)) * 3.257;
  var locationDiv = document.createElement('div');
  locationDiv.innerHTML = '<h2>Current distance from sun is:</h2>' + location;
  document.getElementById('output').innerHTML = '';
  document.getElementById('output').appendChild(locationDiv);
}

