  
clickEvent(){
  // update the mouse variable
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

  // create a Ray with origin at the mouse position
  //   and direction into the scene (camera direction)
   var vector = new THREE.Vector3(
        ( event.clientX / window.innerWidth ) * 2 - 1,
      - ( event.clientY / window.innerHeight ) * 2 + 1,
        0.5
    );
  projector.unprojectVector( vector, camera );
  var ray = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

  // create an array containing all objects in the scene with which the ray intersects
  var intersects = ray.intersectObjects( targetList );

  if ( intersects.length > 0 ){
    ///do something here on click (right now changes colour)
    intersects[ 0 ].object.material.color.setHex( Math.random() * 0xffffff );
  }
}
