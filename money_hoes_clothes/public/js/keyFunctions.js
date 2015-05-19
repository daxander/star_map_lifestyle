function goHome() {
  console.log('h clicked');
  camera.position.set( 0, 0, 0 );
}


var constellationsOn = false;
function toggleConstellations() {
  console.log('c clicked');
  if (constellationsOn == true) {
    for (i=0; i<totalLines.length; i++) {
      scene.remove(totalLines[i]);
    }
    constellationsOn = false;
  } else {
    for (i=0; i<totalLines.length; i++) {
      scene.add(totalLines[i]);
    }
    constellationsOn = true;
  }
}
