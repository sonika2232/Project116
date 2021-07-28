noseX=0;
noseY=0;

function preload()
{
mustache_img= loadImage('https://i.postimg.cc/rp8D52TN/mustache.png');
}

function setup()
{
canvas= createCanvas(300 , 300);
canvas.center();
video= createCapture(VIDEO);
video.size(300 , 300);
video.hide();

poseNet= ml5.poseNet(video , modelLoaded);
poseNet.on('pose' , gotPoses);
}

function modelLoaded()
{
console.log('poseNet is initialized');
}

function draw()
{
image(video , 0 , 0 , 300 , 300);
image(mustache_img , noseX , noseY , 80 , 30)
}
function take_snapshot()
{
save('myimage.png');
}

function gotPoses(results)
{
if(results.length > 0) 
 {
    noseX= results[0].pose.nose.x -40;
    noseY= results[0].pose.nose.y;
    console.log(results);
  console.log("nose x=" + results[0].pose.nose.x);
  console.log("nose y=" + results[0].pose.nose.y);
 }
}