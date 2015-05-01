
var camera, scene, renderer, controls;

init();
animate();

function init() {

  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
  camera.position.set( 200, 200, 200 );

  scene = new THREE.Scene();


  var editor = document.createElement( 'textarea' );

  var cssObject = new THREE.CSS3DObject( editor );
  cssObject.position = {x: 0, y: 0, z: 0};
  scene.add(cssObject);

  renderer = new THREE.CSS3DRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.domElement.style.position = 'absolute';
  renderer.domElement.style.top = 0;
  document.body.appendChild( renderer.domElement );

  camera.lookAt(cssObject.position);

  //attach controls to canvas element
  var controls = new THREE.OrbitControls(camera, renderer.domElement);
}

function animate() {

  requestAnimationFrame( animate );

  renderer.render( scene, camera );

  //controls update data
  controls.update();

}
