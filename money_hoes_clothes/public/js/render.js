function render() {
  var delta = clock.getDelta();
  requestAnimationFrame( render );
  camControls.update(delta);
  renderer.render( scene, camera );
}