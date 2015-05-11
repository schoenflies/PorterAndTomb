
var camera, cssScene, renderer, controls, glrenderer;

init();
animate();

function init() {

  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 100 );
  camera.position.set( 200, 200, 200 );

  cssScene = new THREE.Scene();

  // instead of embedding the editor into the 3d world directly, we are embedding an iframe into the world.
  // this gives us the flexibility to have more than just editors on virtual screens. iframes are also the only way 
  // we could come up with to fix the cursor drift bug. 
  var element = document.createElement( 'iframe' );

  // Here we point the iframe to the ace.html page, which is just a text editor.
  // At some point the html files that we point iframes to need to be dynamically created to support multiple files and workspaces.
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

  // attach controls to canvas element
  controls = new THREE.OrbitControls(camera, renderer.domElement);
}

function animate() {
  requestAnimationFrame( animate );
  renderer.render( cssScene, camera );

  // controls update data
  controls.update();
}
