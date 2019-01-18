import * as THREE from 'three';
import "./OrbitControls.js";

var is_stats=false;

var container, stats, controls;
var camera, scene, renderer, light, lighth, ambient;

init();
animate();

function init() {
    container = document.getElementById('three');
    container.style.height=(window.innerHeight)+"px";

    camera = new THREE.PerspectiveCamera( 45, container.clientWidth / container.clientHeight, 1, 10000 );
    camera.position.set( 150, 150, 100 );
    
    //camera.lookAt(0,30,0);
    scene = new THREE.Scene();

    
    light = new THREE.DirectionalLight( 0xffffff, 0.2 );
    light.position.set( -1000, 500, 0 );
    scene.add( light );

    light = new THREE.DirectionalLight( 0xffffff, 0.2 );
    light.position.set( 1000, 500, 0 );
    scene.add( light );

    ambient = new THREE.AmbientLight(0xffffff , 0.5)
    scene.add( ambient );

    // grid
    var gridHelper = new THREE.GridHelper( 100, 10, 0x303030, 0x303030 );
    scene.add( gridHelper );

    // stats
    if (is_stats) {
        stats = new Stats();
        container.appendChild( stats.dom );
    }


    renderer = new THREE.WebGLRenderer({"antialias":true, "alpha":true});
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( container.clientWidth, container.clientHeight );

    container.appendChild(renderer.domElement);

    controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.target.set( 0, 15, 0 );
    controls.autoRotate=false;
    controls.autoRotateSpeed=0.5;
    controls.rotateSpeed=0.1;
    
    controls.enablePan=true;
    
    controls.enableDamping=true;

    controls.maxDistance=180;
    controls.minDistance=100;
    //controls.enabled = true;
    //controls.rotate = false;


    window.addEventListener( 'resize', onWindowResize, false );
}

function onWindowResize() {

    var container = document.getElementById('three');
    container.style.height=(window.innerHeight)+"px";

    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    
    renderer.setSize( container.clientWidth, container.clientHeight );

}

//

function animate() {
    controls.update();

    requestAnimationFrame( animate );
    
    renderer.render( scene, camera );
   
    if(is_stats) stats.update();

}


export { camera, scene,  renderer, controls };
