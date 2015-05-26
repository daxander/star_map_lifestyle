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

    function makeSphere( x, y, z, size, opac, texture, spin_y, planet){
        geometry = new THREE.SphereGeometry(size, 60, 60);
        material = new THREE.MeshBasicMaterial({transparent: true, opacity: opac});
        material.map = THREE.ImageUtils.loadTexture(texture);

        sphere = new THREE.Mesh( geometry, material );


        sphere.position.set(x,y,z);

        sphere.spin_x = Math.PI;
        sphere.spin_y = spin_y;
        console.log(planet);
        console.log(sphere);
        sphere.planet = true;
        if(planet) {
            sphere.name = planet.name;
            sphere.diameter = planet.diameter;
            sphere.distance = planet.distance;
        } else {
            sphere.name = '';
            sphere.diameter = '';
            sphere.distance = '';
        }
        
        targetList.push( sphere );

        scene.add( sphere );
        planets.push( sphere );



    }

    orbits = [];
    function makeOrbit(radius) {
        segments = 200,
        material = new THREE.LineBasicMaterial( { color: 0xFFFFFF } ),
        geometry = new THREE.CircleGeometry( radius, segments );
        geometry.vertices.shift();


        orbit = new THREE.Line( geometry, material )


        scene.add( orbit );
        orbits.push( orbit );
    }


    function makeSun(){
        var helios = {name: 'Sun', distance: '0 km', diameter: '1,391,684 km'};
        makeSphere( 0,0,0, 5, 1.0, sunTexture, earthRotationy, helios );
        makeSphere( 0,0,0, 5.1, 0.6, sunTexture, sunRotationy, helios );
        
    }


    function makeMercury(){
        var mercury = {name: 'Mercury', distance: '57,910,000 km', diameter: '4,800 km'};
        makeSphere( 6,0,0, .5, 1.0, mercuryTexture, earthRotationy, mercury);
        makeOrbit(6);
        
    }

    function makeVenus(){
        var venus = {name: 'Venus', distance: '108,200,000 km', diameter: '12,100 km'};
        makeSphere( 10.5,0,0, 1.5, 1.0, venusTexture, earthRotationy, venus);
        makeOrbit( 10.5 );
        
    }

    function makeEarth(){
        var earth = {name: 'Earth', distance: '149,600,000 km', diameter: '12,750 km'};
        makeSphere( 15,0,0, 1.7 , 1.0, earthTexture, earthRotationy, earth);
        makeOrbit( 15 );
        
    }

    function makeMars(){
        var mars = {name: 'Mars', distance: '227,940,000 km', diameter: '6,800 km'};
        makeSphere( 22.5,0,0, .9 , 1.0, marsTexture, earthRotationy, mars);
        makeOrbit( 22.5 );
        
    }

    function makeJupiter(){
         var jupiter = {name: 'Jupiter', distance: '778,330,000 km', diameter: '142,800 km'};
        makeSphere( 77.5,0,0, 3.2 , 1.0, jupiterTexture, earthRotationy, jupiter);
        makeOrbit( 77.5 );
       
    }

    function makeSaturn(){
        var saturn = {name: 'Saturn', distance: '1,424,600,000 km', diameter: '120,660 km'};
        makeSphere( 142,0,0, 2.8 , 1.0, saturnTexture, earthRotationy, saturn);
        makeOrbit( 142 );
        
    }

    function makeUranus(){
        var uranus = {name: 'Uranus', distance: '2,873,550,000 km', diameter: '51,800 km'};
        makeSphere( 262,0,0, 2.2 , 1.0, uranusTexture, earthRotationy, uranus);
        makeOrbit( 262 );
        
    }


    function makeNeptune(){
        var neptune = {name: 'Neptune', distance: '4,501,000,000 km', diameter: '49,500 km'};
        makeSphere( 450,0,0, 2 , 1.0, neptuneTexture, earthRotationy, neptune);
        makeOrbit( 450 );
        
    }

    function makePluto(){
        var pluto = {name: 'Pluto', distance: '5,945,900,000 km', diameter: '3,300 km'};
        makeSphere( 650,0,0, 2 , 1.0, plutoTexture, earthRotationy, pluto);
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
    }
};

