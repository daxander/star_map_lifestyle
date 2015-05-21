function getPlanets(){
    var geometry = new THREE.SphereGeometry( 5, 60, 60 );
    var material = new THREE.MeshBasicMaterial();
    material.map  = THREE.ImageUtils.loadTexture('public/sunFinal.jpg');

    var geometry2 = new THREE.SphereGeometry( 5.1, 60, 60 );
    var material2 = new THREE.MeshBasicMaterial({transparent: true, opacity:0.6} );
    material2.map  = THREE.ImageUtils.loadTexture('public/sunFinal.jpg');
    // material2.opacity = 0.3;

    var sphere = new THREE.Mesh( geometry, material );
    var sphere2 = new THREE.Mesh( geometry2, material2 );


    sphere.position.set(0,0,0);

   
    
   

    var geometry2 = new THREE.SphereGeometry( .5, 60, 60 );
    var material2 = new THREE.MeshBasicMaterial( );
    material2.map  = THREE.ImageUtils.loadTexture('public/mercury.jpg');
    var mercury = new THREE.Mesh( geometry2, material2 );
    
    var radius   = 6,
    segments = 200,
    material_mer = new THREE.LineBasicMaterial( { color: 0xFFFFFF } ),
    geometry_mer = new THREE.CircleGeometry( radius, segments );
    geometry_mer.vertices.shift();

    scene.add( new THREE.Line( geometry_mer, material_mer ) );


    mercury.position.set(6,0,0);
    

    var geometry3 = new THREE.SphereGeometry( 1.5, 60, 60 );
    var material3 = new THREE.MeshBasicMaterial( );
    material3.map  = THREE.ImageUtils.loadTexture('public/venus.jpg');
    var venus = new THREE.Mesh( geometry3, material3 );

    var radius   = 10.5,
    segments = 200,
    material_ven = new THREE.LineBasicMaterial( { color: 0xFFFFFF } ),
    geometry_ven = new THREE.CircleGeometry( radius, segments );
    geometry_ven.vertices.shift();

    scene.add( new THREE.Line( geometry_ven, material_ven ) );


    venus.position.set(10.5,0,0);
    

    var geometry4 = new THREE.SphereGeometry( 1.7, 60, 60 );
    var material4 = new THREE.MeshBasicMaterial( );
    material4.map  = THREE.ImageUtils.loadTexture('public/earth.jpg');
    var earth = new THREE.Mesh( geometry4, material4 );

    var radius   = 15,
    segments = 200,
    material_ear = new THREE.LineBasicMaterial( { color: 0xFFFFFF } ),
    geometry_ear = new THREE.CircleGeometry( radius, segments );
    geometry_ear.vertices.shift();

    scene.add( new THREE.Line( geometry_ear, material_ear ) );


    earth.position.set(15,0,0);
    


    var geometry5 = new THREE.SphereGeometry( 0.9, 60, 60 );
    var material5 = new THREE.MeshBasicMaterial( );
    material5.map  = THREE.ImageUtils.loadTexture('public/mars.jpg');
    var mars = new THREE.Mesh( geometry5, material5 );

    var radius   = 22.5,
    segments = 200,
    material_mar = new THREE.LineBasicMaterial( { color: 0xFFFFFF } ),
    geometry_mar = new THREE.CircleGeometry( radius, segments );
    geometry_mar.vertices.shift();

    scene.add( new THREE.Line( geometry_mar, material_mar ) );


    mars.position.set(22.5,0,0);
    scene.add( mars );

    var geometry6 = new THREE.SphereGeometry( 3.2, 60, 60 );
    var material6 = new THREE.MeshBasicMaterial( );
    material6.map  = THREE.ImageUtils.loadTexture('public/jupiter.jpg');
    var jupiter = new THREE.Mesh( geometry6, material6 );

    var radius   = 77.5,
    segments = 200,
    material_jup = new THREE.LineBasicMaterial( { color: 0xFFFFFF } ),
    geometry_jup = new THREE.CircleGeometry( radius, segments );
    geometry_jup.vertices.shift();

    scene.add( new THREE.Line( geometry_jup, material_jup ) );


    jupiter.position.set(77.5,0,0);
    

    var geometry7 = new THREE.SphereGeometry( 2.8, 60, 60 );
    var material7 = new THREE.MeshBasicMaterial( );
    material7.map  = THREE.ImageUtils.loadTexture('public/saturn.jpg');
    var saturn = new THREE.Mesh( geometry7, material7 );

    var radius   = 142,
    segments = 200,
    material_sat = new THREE.LineBasicMaterial( { color: 0xFFFFFF } ),
    geometry_sat = new THREE.CircleGeometry( radius, segments );
    geometry_sat.vertices.shift();

    scene.add( new THREE.Line( geometry_sat, material_sat ) );


    saturn.position.set(142,0,0);

    renderer.shadowMapEnabled = true;



    geometry_rings    = new THREE.CylinderGeometry( 5, 4, .2 , 50 ,50); 
    material_rings    = new THREE.MeshBasicMaterial(); 
    material_rings.map = THREE.ImageUtils.loadTexture('public/rings.png');
    var rings    = new THREE.Mesh( geometry_rings, material_rings );

    rings.rotation.x = Math.PI / 2;
    rings.rotation.y = Math.PI / 2;

    rings.position.set(142,0,0);
    scene.add( rings )
    //  geometry_rings2    = new THREE.TorusGeometry( 5, .3 , 10 ,50); 
    // material_rings2    = new THREE.MeshBasicMaterial(); 
    // material_rings2.map = THREE.ImageUtils.loadTexture('public/rings.png');
    // var rings2    = new THREE.Mesh( geometry_rings2, material_rings2 );




    // rings2.position.set(142,0,0);
    // scene.add( rings2 )

    // var geometry_ring = new THREE.RingGeometry(4, 20, thetaSegments, phiSegments, 0, Math.PI * 2);
    // var material_ring = new THREE.MeshBasicMaterial({wireframe: true})
    // ring.map = THREE.ImageUtils.loadTexture('public/rings.png');

    // var ring = new THREE.Mesh(geometry_ring, material_ring);
    // ring.position.set(142, 0, 0);
    // scene.add(ring);

    

    var geometry8 = new THREE.SphereGeometry( 2.2, 60, 60 );
    var material8 = new THREE.MeshBasicMaterial( );
    material8.map  = THREE.ImageUtils.loadTexture('public/uranus.jpg');
    var uranus = new THREE.Mesh( geometry8, material8 );

    var radius   = 262,
    segments = 200,
    material_ura = new THREE.LineBasicMaterial( { color: 0xFFFFFF } ),
    geometry_ura = new THREE.CircleGeometry( radius, segments );
    geometry_ura.vertices.shift();

    scene.add( new THREE.Line( geometry_ura, material_ura ) );


    uranus.position.set(262,0,0);

    var geometry9 = new THREE.SphereGeometry( 2, 60, 60 );
    var material9 = new THREE.MeshBasicMaterial( );
    material9.map  = THREE.ImageUtils.loadTexture('public/neptune.jpg');
    var neptune = new THREE.Mesh( geometry9, material9 );

    var radius   = 450,
    segments = 200,
    material_nep = new THREE.LineBasicMaterial( { color: 0xFFFFFF } ),
    geometry_nep = new THREE.CircleGeometry( radius, segments );
    geometry_nep.vertices.shift();

    scene.add( new THREE.Line( geometry_nep, material_nep ) );


    neptune.position.set(450,0,0);
    

    var geometry10 = new THREE.SphereGeometry( 2, 60, 60 );
    var material10 = new THREE.MeshBasicMaterial( );
    material10.map  = THREE.ImageUtils.loadTexture('public/pluto.jpg');
    var pluto = new THREE.Mesh( geometry10, material10 );

    var radius   = 650,
    segments = 200,
    material_plu = new THREE.LineBasicMaterial( { color: 0xFFFFFF } ),
    geometry_plu = new THREE.CircleGeometry( radius, segments );
    geometry_plu.vertices.shift();

    scene.add( new THREE.Line( geometry_plu, material_plu ) );


    pluto.position.set(650,0,0);
  
    var planets = [sphere, earth, mercury];


    var animateSun = function () {

    requestAnimationFrame( animateSun );

    sphere.rotation.x = (60/180)*Math.PI;
    sphere.rotation.y = Date.now() * 0.0001;
    sphere2.rotation.x = -Math.PI;
    sphere2.rotation.y = Date.now() * -0.0001;

    renderer.render( scene, camera );

    }
    var animateMercury = function () {

    requestAnimationFrame( animateMercury );

    mercury.rotation.x = (23.5/180)*Math.PI;
    mercury.rotation.y = Date.now() * 0.0001;

    renderer.render( scene, camera );

    }
    var animateVenus = function () {

    requestAnimationFrame( animateVenus );

    venus.rotation.x = (23.5/180)*Math.PI;
    venus.rotation.y = Date.now() * 0.0001;

    renderer.render( scene, camera );

    }

    var animateEarth = function () {

    requestAnimationFrame( animateEarth );

    earth.rotation.x = (23.5/180)*Math.PI;
    earth.rotation.y = Date.now() * 0.0001;

    renderer.render( scene, camera );

    }
    var animateMars = function () {

    requestAnimationFrame( animateMars );

    mars.rotation.x = (23.5/180)*Math.PI;
    mars.rotation.y = Date.now() * 0.0001;

    renderer.render( scene, camera );

    }
    var animateJupiter = function () {

    requestAnimationFrame( animateJupiter );

    jupiter.rotation.x = (23.5/180)*Math.PI;
    jupiter.rotation.y = Date.now() * 0.0001;

    renderer.render( scene, camera );

    }
    var animateSaturn = function () {

    requestAnimationFrame( animateSaturn );

    saturn.rotation.x = (23.5/180)*Math.PI;
    saturn.rotation.y = Date.now() * 0.0001;

    renderer.render( scene, camera );

    }
    var animateUranus = function () {

    requestAnimationFrame( animateUranus );

    uranus.rotation.x = (23.5/180)*Math.PI;
    uranus.rotation.y = Date.now() * 0.0001;

    renderer.render( scene, camera );

    }
    var animateNeptune = function () {

    requestAnimationFrame( animateNeptune );

    neptune.rotation.x = (23.5/180)*Math.PI;
    neptune.rotation.y = Date.now() * 0.0001;

    renderer.render( scene, camera );

    }
    var animatePluto = function () {

    requestAnimationFrame( animatePluto );

    pluto.rotation.x = (23.5/180)*Math.PI;
    pluto.rotation.y = Date.now() * 0.001;

    renderer.render( scene, camera );

    }

    // console.log(planets);
    animateSun();
    animateMercury();
    animateVenus();

    animateEarth();
    animateMars();
    animateJupiter();
    animateSaturn();
    animateUranus();
    animateNeptune();
    animatePluto();

    // for (var i=0; i<planets.length; i++) {
    //   console.log("hey israa it worked");
    //   var planet = planets[i];
    //   // console.log(p.rotation.x);
    //   // requestAnimationFrame( animate );

    //   // sphere.rotation.x += (23.5/180)*Math.PI;
    //   // sphere.rotation.y += Date.now() * 0.001;

    //   // renderer.render( scene, camera );
    //   animate(planet);
    // }

      scene.add( pluto );
      scene.add( neptune );
      scene.add( uranus );
      scene.add( saturn );
      scene.add( jupiter );
      scene.add( earth );
      scene.add( sphere );
      scene.add( sphere2 );
      scene.add( mercury );
      scene.add( venus );



  };