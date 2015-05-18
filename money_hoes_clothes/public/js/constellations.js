function constellations(data){
  var posx = data['constellations'][0][0];
  var posy = data['constellations'][0][1];
  var posz = data['constellations'][0][2];
  var posx2 = data['constellations'][1][0];
  var posy2 = data['constellations'][1][1];
  var posz2 = data['constellations'][1][2];


  var line = new THREE.Object3D();

  line.add( buildConst( new THREE.Vector3(posx, posy, posz), new THREE.Vector3( posx2, posy2, posz2 ), 0x0000FF) ); 
    scene.add(line);
};


function buildConst( src, dst, colorHex ) {
 var geom = new THREE.Geometry(), mat;
 mat = new THREE.LineBasicMaterial({ linewidth: 4, color: colorHex });
 geom.vertices.push( src.clone() );
 geom.vertices.push( dst.clone() );
 geom.computeLineDistances(); // This one is SUPER important, otherwise dashed lines will appear as simple plain lines

 var axis = new THREE.Line( geom, mat, THREE.LinePieces );

 return axis;
}

