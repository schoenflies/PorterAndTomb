
var camera, cssScene, renderer, controls, glrenderer;

init();
animate();

function init() {

  camera = new THREE.PerspectiveCamera( 95, window.innerWidth / window.innerHeight, 1, 100 );
  camera.position.set( 0, 0, 200 );

  cssScene = new THREE.Scene();


  var element = document.createElement( 'iframe' );
  element.src = './ace.html';
  element.style.width = "60vw";
  element.style.height = "60vh";



  var cssObject = new THREE.CSS3DObject( element );
  cssScene.add(cssObject);

  renderer = new THREE.CSS3DRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.domElement.style.position = 'absolute';
  renderer.domElement.style.top = 0;
  document.body.appendChild( renderer.domElement );

  camera.lookAt(cssObject.position);

  //attach controls to canvas element
  controls = new THREE.OrbitControls(camera, renderer.domElement);
}

function animate() {
  requestAnimationFrame( animate );
  renderer.render( cssScene, camera );

  //controls update data
  controls.update();
}
