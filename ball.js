
// 2. Reference canvas element 
var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 3. Initialize WebGL 
var gl = canvas.getContext("webgl");
if(!gl) {
    gl = canvas.getContext("2d");
}

//3D Camera 
var fieldOfView = 45 * Math.PI / 180;
var aspect = canvas.width / canvas.height;
var zNear = .1;
var zFar = 100.0;
var projectionMatrix = mat4.create();
mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

//Lighting (may need to consider shaders)
var lightPosition = vec3.fromValues(1.0, 1.0, 1.0);
var lightColor = vec3.fromValues(1.0, 1.0, 1.0);