
var camera, cssScene, renderer, controls, glrenderer;

init();
animate();

function init() {

  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
  camera.position.set( 200, 200, 200 );

  cssScene = new THREE.Scene();


  var element = document.createElement( 'iframe' );
  element.src = 'http://mrdoob.com/projects/code-editor/';
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
