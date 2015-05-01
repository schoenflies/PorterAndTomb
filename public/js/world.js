//set global var
var width = window.innerWidth;
var height = window.innerHeight;

//define scene
var scene = new THREE.Scene();

//define renderer
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( width, height );
document.body.appendChild( renderer.domElement ); //also can use $('body').append(renderer.domElement))


//define cube geometry and material
var cubeGeometry = new THREE.CubeGeometry(25, 200, 200);
var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x1ec876});

var cubeMid = new THREE.Mesh(cubeGeometry, cubeMaterial);

var cubeRight = new THREE.Mesh(cubeGeometry, cubeMaterial);
cubeRight.position.x = 340;
cubeRight.position.z = 50;

var cubeLeft = new THREE.Mesh(cubeGeometry, cubeMaterial);
cubeLeft.position.x = -340;
cubeLeft.position.z = 50;
 
cubeMid.rotation.y = Math.PI * 90 / 180;
cubeRight.rotation.y = Math.PI * 45 / 180;
cubeLeft.rotation.y = Math.PI * -45 / 180;
 
scene.add(cubeMid);
scene.add(cubeRight);
scene.add(cubeLeft);


// bottom plane
var geometry = new THREE.PlaneGeometry( 2000, 2000, 300 );
var material = new THREE.MeshBasicMaterial( {color: 0x220099, side: THREE.DoubleSide} );
var plane = new THREE.Mesh( geometry, material );
plane.position.x = 0;
plane.position.y = -100;
plane.position.z = 0;
plane.rotation.x = Math.PI * 90 / 180;
scene.add( plane );


//add skybox
var skyboxGeometry = new THREE.CubeGeometry(10000, 10000, 10000);
var skyboxMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.BackSide });
var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
 
scene.add(skybox);

/////////////EXPERIMENTS WITH DOM ELEMENT EMBEDDING//////////////////

// create the dom Element
// var element = document.createElement( 'img' );
// element.src = 'ball.png';


var element = document.createElement( 'div' );
element.id = "editor";
document.body.appendChild(element);

// // setup the ace editor
// var editor = ace.edit("editor");
// editor.setTheme("ace/theme/monokai");
// editor.getSession().setMode("ace/mode/javascript");

// setup codemirror
var myCodeMirror = CodeMirror(element, {
  value: "function myScript(){return 100;}\n",
  mode:  "javascript"
});

// create the object3d for this element
var cssObject = new THREE.CSS3DObject( element );
// we reference the same position and rotation 
cssObject.position = cubeMid.position;
cssObject.rotation = cubeMid.rotation;
// add it to the scene
scene.add(cssObject);


var cssRenderer = new THREE.CSS3DRenderer();
cssRenderer.setSize( width, height );
cssRenderer.domElement.style.position = 'absolute';
cssRenderer.domElement.style.top = 0;
document.body.appendChild( cssRenderer.domElement );

var material   = new THREE.MeshBasicMaterial();
material.color.set('black');
material.opacity   = 0;
material.blending  = THREE.NoBlending;
// any mesh using this material will act as a see-thru to the css renderer

/////////////////////////////////////////////////////////////////////

//add lights
var pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 300, 200);
scene.add(pointLight);

//define camera 
var camera = new THREE.PerspectiveCamera( 90, width/height, 0.1, 1000 );
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 350;
camera.lookAt(cubeMid.position);


var render = function() {
  //render regular objects
    renderer.render(scene, camera);

  //render css objects
    cssRenderer.render(scene, camera);

    // requestAnimationFrame( render );
};

render();

