function sphereMaker(position) {
  for(i=0; i<300; i++){
    var x = position[i]['x']
    var y = position[i]['y']
    var z = position[i]['z']

    var geometry = new THREE.SphereGeometry( .04513, 20, 20 );
    //.00000004513 actual size (think about scaling up the distance to make them larger if there are canvas rendering issues????)
    var material = new THREE.MeshBasicMaterial( );
    THREE.ImageUtils.crossOrigin = '';
    material.map  = THREE.ImageUtils.loadTexture('/public/sunFinal.jpg');

    var sphere = new THREE.Mesh( geometry, material );
    sphere.position.set(x, y, z);

    scene.add( sphere );
  }
}