constellations = function(data){
  totalLines = [];
  for ( x=0; x < data.constellations.length; x++) {
    for( i=0; i < data.constellations[x].length -1; i++){
      var posx = data.constellations[x][i][0];
      var posy = data.constellations[x][i][1];
      var posz = data.constellations[x][i][2];
      var posx2 = data.constellations[x][i+1][0];
      var posy2 = data.constellations[x][i+1][1];
      var posz2 = data.constellations[x][i+1][2];
      line = new THREE.Object3D();
      console.log("making line")


      line.add( buildConst( new THREE.Vector3(posx, posy, posz), new THREE.Vector3( posx2, posy2, posz2 ), 0xFFFFFF) ); 
      totalLines.push(line);
      targetList.push(line);
    }
  }
};

function buildConst( src, dst, colorHex ) {
 var geom = new THREE.Geometry(), mat;
 mat = new THREE.LineBasicMaterial({ linewidth: 1, color: colorHex });
 geom.vertices.push( src.clone() );
 geom.vertices.push( dst.clone() );
 // geom.computeLineDistances(); // This one is SUPER important, otherwise dashed lines will appear as simple plain lines

 var axis = new THREE.Line( geom, mat, THREE.LinePieces );

 return axis;
}

