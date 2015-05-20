function sphereMaker(stats) {
 
  
  var geometry = new THREE.SphereGeometry( .03265, 20, 20 );
   //.00000004513 actual size
  console.log('making spheres');
  var materialBlue = new THREE.MeshBasicMaterial({color:0x6CE1FF});
  var materialBlueWhite = new THREE.MeshBasicMaterial({color:0xC4F3FF});
  var materialWhite = new THREE.MeshBasicMaterial({color:0xFFFFFF});
  var materialYellow = new THREE.MeshBasicMaterial({color:0xFFFF85});
  var materialOrange = new THREE.MeshBasicMaterial({color:0xFFBC59});
  var materialRed = new THREE.MeshBasicMaterial({color:0xFF5C33});
   //repeat as many times as there are stars in the data
  for(i=0; i<stats.length; i++){
    var x = stats[i]['x'];
    var y = stats[i]['y'];
    var z = stats[i]['z'];
    var name = stats[i]['name'];
    var distance = stats[i]['distance'];
    var luminosity = stats[i]['luminosity'];
    var color_index = stats[i]['color'];
    var id = stats[i]['id'];
    var color;
    if(color_index <= -0.2988){
      material = materialBlue;
    }else if(color_index <= -0.0670){
      material = materialBlueWhite;
    }else if(color_index <= 0.3857){
      material = materialWhite;
    }else if(color_index <= 0.8612){
      material = materialYellow; 
    }else if(color_index <= 1.4057){
      material = materialOrange;
    }else if(color_index > 1.4057 ){
      material = materialRed;
    };

    
   
    var sphere = new THREE.Mesh( geometry, material );
    

    if(stats[i]['constId']){
      sphere.constellation = stats[i]['constId'];
    }

    sphere.name = name;
    sphere.distance = distance;
    sphere.color_index = color_index;
    sphere.luminosity = luminosity;
    sphere.id = id;
    sphere.position.set(x, y, z);
    targetList.push(sphere);
    scene.add( sphere );
  }
}