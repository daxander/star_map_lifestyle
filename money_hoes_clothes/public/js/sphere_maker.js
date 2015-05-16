function sphereMaker(stats) {
    //repeat as many times as there are stars in the data
    for(i=0; i<stats.length; i++){
      var x = stats[i]['x'];
      var y = stats[i]['y'];
      var z = stats[i]['z'];
      var name = stats[i]['name'];
      var distance = stats[i]['distance'];
      var luminosity = stats[i]['luminosity'];
      var color_index = stats[i]['color'];
      var color;
      if(color_index <= -0.2988){
        //blue
        color = 0x6CE1FF
      }else if(color_index <= -0.0670){
        //blue white
        color = 0xC4F3FF
      }else if(color_index <= 0.3857){
        //white
        color = 0xFFFFFF
      }else if(color_index <= 0.8612){
        //yellow
        color = 0xFFFF85
      }else if(color_index <= 1.4057){
        //orange
        color = 0xFFBC59
      }else if(color_index > 1.4057 ){
        //red
        color = 0xFF5C33
      };

      var geometry = new THREE.SphereGeometry( .04513, 20, 20 );
      //.00000004513 actual size (think about scaling up the distance to make them larger if there are canvas rendering issues????)
      var material = new THREE.MeshBasicMaterial( { color: color } );
      THREE.ImageUtils.crossOrigin = '';
      material.map  = THREE.ImageUtils.loadTexture('public/sunFinal.jpg');

      var sphere = new THREE.Mesh( geometry, material );
      sphere.position.set(x, y, z);
      scene.add( sphere );


      var geometry2 = new THREE.SphereGeometry( .04, 20, 20 );


      var sphere2 = new THREE.Mesh( geometry, material );
      sphere2.position.set(x, y, z);
      scene.add( sphere2 );

      targetList.push(sphere);
    }
  }