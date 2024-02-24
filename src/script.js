import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import {ARButton} from 'https://unpkg.com/three@0.126.0/examples/jsm/webxr/ARButton.js'
import { VRButton } from 'three/addons/webxr/VRButton.js'



/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Texture loader
const textureLoader = new THREE.TextureLoader()
const doorColorTexture = textureLoader.load('./textures/door/color.jpg')
const doorAplhaTexture = textureLoader.load('./textures/door/alpha.jpg')
const doorAmbientOcclusionTexture = textureLoader.load('./textures/door/ambientOcclusion.jpg')
const doorHeightTexture = textureLoader.load('./textures/door/height.jpg')
const doorNormalTexture = textureLoader.load('./textures/door/normal.jpg')
const doorMetalnessTexture = textureLoader.load('./textures/door/metalness.jpg')
const doorRoughnessTexture = textureLoader.load('./textures/door/roughness.jpg')
const matcapTexture = textureLoader.load('./textures/matcaps/2.png')
const gradientTexture = textureLoader.load('./textures/gradients/3.jpg')

doorColorTexture.colorSpace = THREE.SRGBColorSpace
matcapTexture.colorSpace = THREE.SRGBColorSpace

// Geometry
const material = new THREE.MeshNormalMaterial()
//material.map = matcapTexture
material.matcap = matcapTexture
//material.flatShading = true


const box = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1), material)

const torus = new THREE.Mesh(
    new THREE.TorusGeometry( 0.3, 0.2, 16, 32 ), material)
     
const cone = new THREE.Mesh(
    new THREE.ConeGeometry( 1, 3, 5 ), material)

scene.add(box, torus, cone)
box.position.x = -1
torus.position.x = 1
cone.position.x = 3.5


/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)


// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
 const renderer = new THREE.WebGLRenderer();
 renderer.setSize(window.innerWidth, window.innerHeight);
 document.body.appendChild(renderer.domElement);

// Add AR button
const button = ARButton.createButton(renderer)
document.body.appendChild(button)

// Create a VR button
const vrButton = new VRButton(renderer)
document.body.appendChild( VRButton.createButton( renderer ) );
renderer.xr.enabled = true;

// Initialize VR controls
const vrControls = new THREE.VRControls(camera);

// Initialize VR effect
const vrEffect = new THREE.VREffect(renderer);
vrEffect.setSize(window.innerWidth, window.innerHeight);

/**
 * Animate
 */
const clock = new THREE.Clock()

renderer.setAnimationLoop( function () {

    const elapsedTime = clock.getElapsedTime()

    box.rotation.x = 0.1 * elapsedTime,
    torus.rotation.x = 0.1 * elapsedTime,
    cone.rotation.x = 0.1 * elapsedTime

    box.rotation.y = -0.2 * elapsedTime,
    torus.rotation.y = -0.2 * elapsedTime,
    cone.rotation.y = -0.2 * elapsedTime

    // Update VR controls
    vrControls.update();

    // Render scene
    vrEffect.render(scene, camera);

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

} );

//const tick = () =>
//{
    // const elapsedTime = clock.getElapsedTime()

    // box.rotation.x = 0.1 * elapsedTime,
    // torus.rotation.x = 0.1 * elapsedTime,
    // cone.rotation.x = 0.1 * elapsedTime

    // box.rotation.y = -0.2 * elapsedTime,
    // torus.rotation.y = -0.2 * elapsedTime,
    // cone.rotation.y = -0.2 * elapsedTime

    // Update VR controls
    //vrControls.update();

    // Render scene
    //vrEffect.render(scene, camera);

    // Update controls
    //controls.update()

    // Render
    //renderer.render(scene, camera)

    // Call tick again on the next frame
    //window.requestAnimationFrame(tick)
//}

//tick()