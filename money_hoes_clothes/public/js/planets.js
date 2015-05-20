function getPlanets(){
    var geometry = new THREE.SphereGeometry( 5, 20, 20 );
    var material = new THREE.MeshBasicMaterial( );
    material.map  = THREE.ImageUtils.loadTexture('public/sunFinal.jpg');

    var sphere = new THREE.Mesh( geometry, material );


    sphere.position.set(0,0,0);
    scene.add( sphere );


    var geometry2 = new THREE.SphereGeometry( .5, 20, 20 );
    var material2 = new THREE.MeshBasicMaterial( );
    material2.map  = THREE.ImageUtils.loadTexture('public/mercury.jpg');
    var mercury = new THREE.Mesh( geometry2, material2 );


    mercury.position.set(6,0,0);
    scene.add( mercury );

    var geometry3 = new THREE.SphereGeometry( 1.5, 20, 20 );
    var material3 = new THREE.MeshBasicMaterial( );
    material3.map  = THREE.ImageUtils.loadTexture('public/venus.jpg');
    var venus = new THREE.Mesh( geometry3, material3 );


    venus.position.set(10.5,0,0);
    scene.add( venus );

    var geometry4 = new THREE.SphereGeometry( 1.7, 20, 20 );
    var material4 = new THREE.MeshBasicMaterial( );
    material4.map  = THREE.ImageUtils.loadTexture('public/earth.jpg');
    var earth = new THREE.Mesh( geometry4, material4 );


    earth.position.set(15,0,0);
    scene.add( earth );


    var geometry5 = new THREE.SphereGeometry( 0.9, 20, 20 );
    var material5 = new THREE.MeshBasicMaterial( );
    material5.map  = THREE.ImageUtils.loadTexture('public/mars.jpg');
    var mars = new THREE.Mesh( geometry5, material5 );


    mars.position.set(22.5,0,0);
    scene.add( mars );

    var geometry6 = new THREE.SphereGeometry( 3.2, 20, 20 );
    var material6 = new THREE.MeshBasicMaterial( );
    material6.map  = THREE.ImageUtils.loadTexture('public/jupiter.jpg');
    var jupiter = new THREE.Mesh( geometry6, material6 );


    jupiter.position.set(77.5,0,0);
    scene.add( jupiter );

    var geometry7 = new THREE.SphereGeometry( 2.8, 20, 20 );
    var material7 = new THREE.MeshBasicMaterial( );
    material7.map  = THREE.ImageUtils.loadTexture('public/saturn.jpg');
    var saturn = new THREE.Mesh( geometry7, material7 );


    saturn.position.set(142,0,0);
    scene.add( saturn );

    var geometry8 = new THREE.SphereGeometry( 2.2, 20, 20 );
    var material8 = new THREE.MeshBasicMaterial( );
    material8.map  = THREE.ImageUtils.loadTexture('public/uranus.jpg');
    var uranus = new THREE.Mesh( geometry7, material7 );


    uranus.position.set(262,0,0);
    scene.add( uranus );

    var geometry9 = new THREE.SphereGeometry( 2, 20, 20 );
    var material9 = new THREE.MeshBasicMaterial( );
    material9.map  = THREE.ImageUtils.loadTexture('public/neptune.jpg');
    var neptune = new THREE.Mesh( geometry8, material8 );


    neptune.position.set(450,0,0);
    scene.add( neptune );
  };