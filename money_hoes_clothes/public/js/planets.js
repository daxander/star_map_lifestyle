function getPlanets(){

    var sunTexture = 'public/sunFinal.jpg';
    var mercuryTexture = 'public/mercury.jpg';
    var earthTexture = 'public/earth.jpg';
    var venusTexture = 'public/venus.jpg';
    var marsTexture = 'public/mars.jpg';
    var jupiterTexture = 'public/jupiter.jpg';
    var saturnTexture = 'public/saturn.jpg';
    var uranusTexture = 'public/uranus.jpg';
    var neptuneTexture = 'public/neptune.jpg';
    var plutoTexture = 'public/pluto.jpg';
    var earthRotationx = (23.5/180)*Math.PI;
    var earthRotationy = 0.0001;
    var sunRotationy = -0.0001;

    planets = [];
    

    function setBackground(){

        var image = "public/starMap.jpg";
        
        var skyGeometry = new THREE.CubeGeometry( 3000, 3000, 3000 ); 

        scene.add( skyGeometry );   
        
        var materialArray = [];
        for (var i = 0; i < 6; i++)
            materialArray.push( new THREE.MeshBasicMaterial({
                map: THREE.ImageUtils.loadTexture( image ),
                side: THREE.BackSide
            }));
        var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
        var skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
        
        scene.add( skyBox );
    }

    function makeSphere( x, y, z, size, opac, texture, spin_y){
        geometry = new THREE.SphereGeometry(size, 60, 60);
        material = new THREE.MeshBasicMaterial({transparent: true, opacity: opac});
        material.map = THREE.ImageUtils.loadTexture(texture);

        sphere = new THREE.Mesh( geometry, material );

        sphere.position.set(x,y,z);

        sphere.spin_x = Math.PI;
        sphere.spin_y = spin_y;

        scene.add( sphere );
        planets.push( sphere );


    }

    function makeOrbit(radius) {
        segments = 200,
        material = new THREE.LineBasicMaterial( { color: 0xFFFFFF } ),
        geometry = new THREE.CircleGeometry( radius, segments );
        geometry.vertices.shift();
 

        orbit = new THREE.Line( geometry, material )


        scene.add( orbit );
    }
  

    function makeSun(){
        makeSphere( 0,0,0, 5, 1.0, sunTexture, earthRotationy );
        makeSphere( 0,0,0, 5.1, 0.6, sunTexture, sunRotationy );

    }

    function makeMercury(){
        makeSphere( 6,0,0, .5, 1.0, mercuryTexture, earthRotationy);
        makeOrbit(6);
    }

    function makeVenus(){
        makeSphere( 10.5,0,0, 1.5, 1.0, venusTexture, earthRotationy);
        makeOrbit( 10.5 );
    }

    function makeEarth(){
        makeSphere( 15,0,0, 1.7 , 1.0, earthTexture, earthRotationy);
        makeOrbit( 15 );
    }

    function makeMars(){
        makeSphere( 22.5,0,0, .9 , 1.0, marsTexture, earthRotationy);
        makeOrbit( 22.5 );
    }

    function makeJupiter(){
        makeSphere( 77.5,0,0, 3.2 , 1.0, jupiterTexture, earthRotationy);
        makeOrbit( 77.5 );
    }

    function makeSaturn(){
        makeSphere( 142,0,0, 2.8 , 1.0, saturnTexture, earthRotationy);
        makeOrbit( 142 );
    }

    function makeUranus(){
        makeSphere( 262,0,0, 2.2 , 1.0, uranusTexture, earthRotationy);
        makeOrbit( 262 );
    }


    function makeNeptune(){
        makeSphere( 450,0,0, 2 , 1.0, neptuneTexture, earthRotationy);
        makeOrbit( 450 );
    }

    function makePluto(){
        makeSphere( 650,0,0, 2 , 1.0, plutoTexture, earthRotationy);
        makeOrbit( 650 );
    }

    function makeSaturnRings(){
        geometry_rings    = new THREE.CylinderGeometry( 8, 4, .2 , 50 ,50); 
        material_rings    = new THREE.MeshBasicMaterial(); 
        material_rings.map = THREE.ImageUtils.loadTexture('public/rings.png');
        var rings    = new THREE.Mesh( geometry_rings, material_rings );

        rings.rotation.x = Math.PI / 2;
        rings.rotation.y = Math.PI / 2;

        rings.position.set(142,0,0);
        scene.add( rings )

    }

    setBackground();
    makeSun();
    makeMercury();
    makeVenus();
    makeEarth();
    makeMars();
    makeJupiter();
    makeSaturn();
    makeSaturnRings();
    makeNeptune();
    makeUranus();
    makePluto();
    

};

   function animate() {
          for (var i = 0; i < planets.length; i++) {
            planets[i].rotation.x = planets[i].spin_x;
            planets[i].rotation.y = Date.now() * planets[i].spin_y; 
            console.log("planet"); 
          }
};

