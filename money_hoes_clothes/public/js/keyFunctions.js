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

    case 3: return "<a href='https://en.wikipedia.org/wiki/Antlia' target='_blank'>Antlia</a>"; break;
    case 30: return "<a href='http://en.wikipedia.org/wiki/Cassiopeia_(constellation)' target='_blank'>Cassiopia</a>"; break;
    case 36: return "<a href='http://en.wikipedia.org/wiki/Cetus' target='_blank'>Cetus, The Whale</a>"; break;
    case 37: return "<a href='http://en.wikipedia.org/wiki/Chamaeleon' target='_blank'>Chamaeleon</a>";; break;
    case 38: return "<a href='http://en.wikipedia.org/wiki/Circinus' target='_blank'>Circinus</a>";; break;
    case 47: return "<a href='http://en.wikipedia.org/wiki/Crux' target='_blank'>Crux (Southern Cross)</a>"; break;
    case 48: return "<a href='http://en.wikipedia.org/wiki/Crux' target='_blank'>Crux (Southern Cross)</a>"; break;

 


    case 95: return "Orion (body)"; break;
    case 96: return "Orion (belt)"; break;
    case 97: return "Orion (arm)"; break;
    case 98: return "Orion (shield)"; break;

    case 133: return "Ursa Major (Big Dipper)"; break;
    case 138: return "Ursa Minor (Little Dipper)"; break;
    case 122: return "<a href='http://en.wikipedia.org/wiki/Sculptor_%28constellation%29' target='_blank'>Sculptor</a>"; break;
    
    case 133: return "<a href='http://en.wikipedia.org/wiki/Ursa_Major' target='_blank'>Ursa Major (Big Dipper)</a>"; break;
    case 138: return "<a href='http://en.wikipedia.org/wiki/Ursa_Major' target='_blank'>Ursa Minor (Little Dipper)</a>"; break;
  
    default: return "unmapped constellation"; break;
  }
}

