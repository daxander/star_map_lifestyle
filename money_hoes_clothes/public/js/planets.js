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

    var radius   = 6,
    segments = 64,
    material_mer = new THREE.LineBasicMaterial( { color: 0x0000ff } ),
    geometry_mer = new THREE.CircleGeometry( radius, segments );
    geometry_mer.vertices.shift();

    scene.add( new THREE.Line( geometry_mer, material_mer ) );

    mercury.position.set(6,0,0);
    scene.add( mercury );

    var geometry3 = new THREE.SphereGeometry( 1.5, 20, 20 );
    var material3 = new THREE.MeshBasicMaterial( );
    material3.map  = THREE.ImageUtils.loadTexture('public/venus.jpg');
    var venus = new THREE.Mesh( geometry3, material3 );

    var radius   = 10.5,
    segments = 64,
    material_ven = new THREE.LineBasicMaterial( { color: 0x0000ff } ),
    geometry_ven = new THREE.CircleGeometry( radius, segments );
    geometry_ven.vertices.shift();

    scene.add( new THREE.Line( geometry_ven, material_ven ) );


    venus.position.set(10.5,0,0);
    scene.add( venus );

    var geometry4 = new THREE.SphereGeometry( 1.7, 20, 20 );
    var material4 = new THREE.MeshBasicMaterial( );
    material4.map  = THREE.ImageUtils.loadTexture('public/earth.jpg');
    var earth = new THREE.Mesh( geometry4, material4 );

    var radius   = 15,
    segments = 64,
    material_ear = new THREE.LineBasicMaterial( { color: 0x0000ff } ),
    geometry_ear = new THREE.CircleGeometry( radius, segments );
    geometry_ear.vertices.shift();

    scene.add( new THREE.Line( geometry_ear, material_ear ) );


    earth.position.set(15,0,0);
    scene.add( earth );


    var geometry5 = new THREE.SphereGeometry( 0.9, 20, 20 );
    var material5 = new THREE.MeshBasicMaterial( );
    material5.map  = THREE.ImageUtils.loadTexture('public/mars.jpg');
    var mars = new THREE.Mesh( geometry5, material5 );

    var radius   = 22.5,
    segments = 64,
    material_mar = new THREE.LineBasicMaterial( { color: 0x0000ff } ),
    geometry_mar = new THREE.CircleGeometry( radius, segments );
    geometry_mar.vertices.shift();

    scene.add( new THREE.Line( geometry_mar, material_mar ) );


    mars.position.set(22.5,0,0);
    scene.add( mars );

    var geometry6 = new THREE.SphereGeometry( 3.2, 20, 20 );
    var material6 = new THREE.MeshBasicMaterial( );
    material6.map  = THREE.ImageUtils.loadTexture('public/jupiter.jpg');
    var jupiter = new THREE.Mesh( geometry6, material6 );

    var radius   = 77.5,
    segments = 64,
    material_jup = new THREE.LineBasicMaterial( { color: 0x0000ff } ),
    geometry_jup = new THREE.CircleGeometry( radius, segments );
    geometry_jup.vertices.shift();

    scene.add( new THREE.Line( geometry_jup, material_jup ) );

    jupiter.position.set(77.5,0,0);
    scene.add( jupiter );

    var geometry7 = new THREE.SphereGeometry( 2.8, 20, 20 );
    var material7 = new THREE.MeshBasicMaterial( );
    material7.map  = THREE.ImageUtils.loadTexture('public/saturn.jpg');
    var saturn = new THREE.Mesh( geometry7, material7 );

    var radius   = 142,
    segments = 64,
    material_sat = new THREE.LineBasicMaterial( { color: 0x0000ff } ),
    geometry_sat = new THREE.CircleGeometry( radius, segments );
    geometry_sat.vertices.shift();

    scene.add( new THREE.Line( geometry_sat, material_sat ) );


    saturn.position.set(142,0,0);
    scene.add( saturn );

    var geometry8 = new THREE.SphereGeometry( 2.2, 20, 20 );
    var material8 = new THREE.MeshBasicMaterial( );
    material8.map  = THREE.ImageUtils.loadTexture('public/uranus.jpg');
    var uranus = new THREE.Mesh( geometry7, material7 );

    var radius   = 262,
    segments = 64,
    material_ura = new THREE.LineBasicMaterial( { color: 0x0000ff } ),
    geometry_ura = new THREE.CircleGeometry( radius, segments );
    geometry_ura.vertices.shift();

    scene.add( new THREE.Line( geometry_ura, material_ura ) );


    uranus.position.set(262,0,0);
    scene.add( uranus );

    var geometry9 = new THREE.SphereGeometry( 2, 20, 20 );
    var material9 = new THREE.MeshBasicMaterial( );
    material9.map  = THREE.ImageUtils.loadTexture('public/neptune.jpg');
    var neptune = new THREE.Mesh( geometry8, material8 );

    neptune.position.set(450,0,0);
    scene.add( neptune );

    var radius   = 450,
    segments = 64,
    material_nep = new THREE.LineBasicMaterial( { color: 0x0000ff } ),
    geometry_nep = new THREE.CircleGeometry( radius, segments );
    geometry_nep.vertices.shift();

    scene.add( new THREE.Line( geometry_nep, material_nep ) );


    neptune.position.set(450,0,0);
    scene.add( neptune );

    var geometry10 = new THREE.SphereGeometry( .66, 20, 20 );
    var material10 = new THREE.MeshBasicMaterial( );
    material10.map  = THREE.ImageUtils.loadTexture('public/pluto.jpg');
    var pluto = new THREE.Mesh( geometry10, material10 );

    var radius   = 650,
    segments = 64,
    material_plu = new THREE.LineBasicMaterial( { color: 0x0000ff } ),
    geometry_plu = new THREE.CircleGeometry( radius, segments );
    geometry_plu.vertices.shift();

    scene.add( new THREE.Line( geometry_plu, material_plu ) );


    pluto.position.set(650,0,0);
    scene.add( pluto );
  };