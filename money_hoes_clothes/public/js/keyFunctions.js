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
  locationDiv.innerHTML = '<h2>Current distance from sun is:</h2>' + location + ' <p><strong>light years</strong></p>';
  document.getElementById('distance2').innerHTML = '';
  document.getElementById('distance2').appendChild(locationDiv);
}

function nameConstellation(id){

  switch ( parseInt(id)) {
    case 30: return "Cassiopia"; break;
    case 47: return "Crux (Southern Cross)"; break;
    case 48: return "Crux (Southern Cross)"; break;

    case 95: return "Orion (body)"; break;
    case 96: return "Orion (belt)"; break;
    case 97: return "Orion (arm)"; break;
    case 98: return "Orion (shield)"; break;
    case 133: return "Ursa Major (Big Dipper)"; break;
    case 138: return "Ursa Minor (Little Dipper)"; break;
    
    default: return "unmapped constellation"; break;
  }
}

