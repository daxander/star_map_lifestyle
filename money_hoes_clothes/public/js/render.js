function render() {
  var delta = clock.getDelta();
  requestAnimationFrame( render );
  camControls.update(delta);
  findLocation();
  animate();
  renderer.render( scene, camera );
}