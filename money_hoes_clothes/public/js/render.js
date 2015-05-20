function render() {
  var delta = clock.getDelta();
  requestAnimationFrame( render );
  camControls.update(delta);
  findLocation();
  renderer.render( scene, camera );
}