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
var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x1ec876 });

var cubeMid = new THREE.Mesh(cubeGeometry, cubeMaterial);

var cubeRight = new THREE.Mesh(cubeGeometry, cubeMaterial);
cubeRight.position.x = 200;
cubeRight.position.z = 50;

var cubeLeft = new THREE.Mesh(cubeGeometry, cubeMaterial);
cubeLeft.position.x = -200;
cubeLeft.position.z = 50;
 
cubeMid.rotation.y = Math.PI * 90 / 180;
cubeRight.rotation.y = Math.PI * 45 / 180;
cubeLeft.rotation.y = Math.PI * -45 / 180;
 
scene.add(cubeMid);
scene.add(cubeRight);
scene.add(cubeLeft);


// plane
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

//add lights
var pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 300, 200);
scene.add(pointLight);

//define camera 
var camera = new THREE.PerspectiveCamera( 60, width/height, 0.1, 1000 );
camera.position.x = 0;
camera.position.y = 50;
camera.position.z = 500;
camera.lookAt(cubeMid.position);


var render = function () {
    renderer.render(scene, camera);

	// box.rotation.x += 0.1;
	// box.rotation.y += 0.1;

    // requestAnimationFrame( render );
	
};

render();