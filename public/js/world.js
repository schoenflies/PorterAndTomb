//set global var
var width = window.innerWidth;
var height = window.innerHeight;

//define scene
var scene = new THREE.Scene();

//define renderer
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( width, height );
document.body.appendChild( renderer.domElement ); //also can use $('body').append(renderer.domElement))


//define box geometry and material
var boxGeometry = new THREE.BoxGeometry(1, 32, 32);
var boxMaterial = new THREE.MeshLambertMaterial({ color: 0x1ec876});

var boxMid = new THREE.Mesh(boxGeometry, boxMaterial);
boxMid.position.z = -8;

var boxRight = new THREE.Mesh(boxGeometry, boxMaterial);
boxRight.position.x = 34;
boxRight.position.z = 5;

var boxLeft = new THREE.Mesh(boxGeometry, boxMaterial);
boxLeft.position.x = -34;
boxLeft.position.z = 5;

boxMid.rotation.y = Math.PI * 90 / 180;
boxRight.rotation.y = Math.PI * 45 / 180;
boxLeft.rotation.y = Math.PI * -45 / 180;

scene.add(boxMid);
scene.add(boxRight);
scene.add(boxLeft);


// bottom plane
var geometry = new THREE.PlaneGeometry( 200, 200, 30 );
var material = new THREE.MeshBasicMaterial( {color: 0x220099, side: THREE.DoubleSide} );
var plane = new THREE.Mesh( geometry, material );
plane.position.x = 0;
plane.position.y = -10;
plane.position.z = 0;
plane.rotation.x = Math.PI * 90 / 180;
scene.add( plane );


//add skybox
var skyboxGeometry = new THREE.BoxGeometry(10000, 10000, 10000);
var skyboxMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.BackSide });
var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);

scene.add(skybox);

//define camera
var camera = new THREE.PerspectiveCamera( 90, width/height, 0.1, 1000 );
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 35;
camera.lookAt(boxMid.position);
scene.add(camera);


var element = document.createElement( 'textarea' );
// element.id = 'editor';
// document.body.appendChild(element);
// element.style.width = '50px';
// element.style.height = '50px';



// // create the object3d for this element
var cssObject = new THREE.CSS3DObject( element );
// // we reference the same position and rotation
cssObject.position = {x: 0, y: 0, z: 0};
// cssObject.rotation = boxLeft.rotation;
// // add it to the scene
scene.add(cssObject);

var cssRenderer = new THREE.CSS3DRenderer();
cssRenderer.setSize( width, height );
cssRenderer.domElement.style.position = 'absolute';
cssRenderer.domElement.style.top = 0;
document.body.appendChild( cssRenderer.domElement );

camera.lookAt(cssObject.position);

// var material   = new THREE.MeshBasicMaterial();
// material.color.set('black');
// material.opacity   = 0;
// material.blending  = THREE.NoBlending;
// any mesh using this material will act as a see-thru to the css renderer

// /////////////EXPERIMENTS WITH DOM ELEMENT EMBEDDING//////////////////

// // create the dom Element
// // var element = document.createElement( 'img' );
// // element.src = 'ball.png';


// var element = document.createElement( 'textarea' );
// element.id = "editor";
// document.body.appendChild(element);

// // // setup the ace editor
// // var editor = ace.edit("editor");
// // editor.setTheme("ace/theme/monokai");
// // editor.getSession().setMode("ace/mode/javascript");

// // setup codemirror
// // var myCodeMirror = CodeMirror(element, {
// //   value: "function myScript(){return 100;}\n",
// //   mode:  "javascript"
// // });

// // create the object3d for this element
// var cssObject = new THREE.CSS3DObject( element );
// // we reference the same position and rotation
// cssObject.position = boxMid.position;
// cssObject.rotation = boxMid.rotation;
// // add it to the scene
// scene.add(cssObject);


// var cssRenderer = new THREE.CSS3DRenderer();
// cssRenderer.setSize( width, height );
// cssRenderer.domElement.style.position = 'absolute';
// cssRenderer.domElement.style.top = 0;
// document.body.appendChild( cssRenderer.domElement );

// var material   = new THREE.MeshBasicMaterial();
// material.color.set('black');
// material.opacity   = 0;
// material.blending  = THREE.NoBlending;
// // any mesh using this material will act as a see-thru to the css renderer

/////////////////////////////////////////////////////////////////////

//add lights
var pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 30, 20);
scene.add(pointLight);



//attach controls to canvas element
var controls = new THREE.OrbitControls(camera, renderer.domElement);


var render = function() {
  requestAnimationFrame( render );

  //render regular objects
  renderer.render(scene, camera);

  //render css objects
  cssRenderer.render(scene, camera);

  //controls update data
  controls.update();

};

render();

