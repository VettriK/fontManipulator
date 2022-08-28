leftWrist=0
rightWrist=0
difference=0
function setup() {
video=createCapture(VIDEO)
video.size(700,700)
canvas=createCanvas(500,500)
canvas.position(900,200)
posenet=ml5.poseNet(video,modelLoaded)
posenet.on("pose",gotPoses)
}
function draw(){
background("darkblue")
fill("yellow")
textSize(difference)
document.getElementById("fontSize").innerHTML="Size of the font will be "+difference
text("Font", 100,250)
}
function modelLoaded(){
console.log("model loaded successfully")
}
function gotPoses(results){
if (results.length>0){
    console.log(results)
    leftWrist=results[0].pose.leftWrist.x
    rightWrist=results[0].pose.rightWrist.x
    difference=Math.floor(leftWrist-rightWrist)
}
}