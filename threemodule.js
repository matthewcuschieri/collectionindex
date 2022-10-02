const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);

let renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(300, 490);
renderer.setClearColor(0x000000, 0); // the default
let doc = document.querySelector(".main");
doc.appendChild(renderer.domElement);

window.addEventListener("resize", function () {
  renderer.setSize(300, 490);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

let controls = new THREE.OrbitControls(camera, renderer.domElement);

let x = 1;
let y = 1;
let width = 900;
let height = 650;
let radius = 10;
let shape = new THREE.Shape();
shape.moveTo(x, y + radius);
shape.lineTo(x, y + height - radius);
shape.quadraticCurveTo(x, y + height, x + radius, y + height);
shape.lineTo(x + width - radius, y + height);
shape.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
shape.lineTo(x + width, y + radius);
shape.quadraticCurveTo(x + width, y, x + width - radius, y);
shape.lineTo(x + radius, y);
shape.quadraticCurveTo(x, y, x, y + radius);

const video = document.getElementById("video");
const texture = new THREE.VideoTexture(video);
const geometry = new THREE.PlaneGeometry(5, 2);
const material = new THREE.MeshBasicMaterial({ map: texture });

const mesh = new THREE.Mesh(geometry, material);
mesh.scale.multiplyScalar(2);
scene.add(mesh);

let localPlane = new THREE.Plane(new THREE.Vector3(0, 0, 0), 1);
renderer.localClippingEnabled = true;
material.clippingPlanes = [localPlane];
material.clipShadows = true;

document.addEventListener("DOMContentLoaded", function () {
  video.play();
});
camera.position.y = 0;
camera.position.z = 14;

const animate = function () {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
};

animate();
