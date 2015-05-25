function render() {
  var delta = clock.getDelta();
  requestAnimationFrame( render );
  camControls.update(delta);
  findLocation();

  renderer.render( scene, camera );
}

function planetRender() {
  var delta = clock.getDelta();
  requestAnimationFrame( planetRender );
  camControls.update(delta);
  animate();

  renderer.render( scene, camera );
}
