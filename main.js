NoseX="";
NoseY="";
function preload(){
clown_image=loadImage("https://i.postimg.cc/RZYxCDmb/mustache-removebg-preview.png")

}
function setup(){
    canvas=createCanvas(300,300);
    video=createCapture(VIDEO);
    canvas.center();
    video.size(300,300)
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,300,300);
   
    image(clown_image,NoseX-25,NoseY-20,50,50)
    
}
function snap(){
    save("screenshot.png");
}
function modelLoaded(){
    console.log("Posenet is initialized");
}
function gotPoses(results){
    
if (results.length>0) { 
    console.log(results);
    NoseX=results[0].pose.nose.x;
    NoseY=results[0].pose.nose.y;
    console.log("nose x is "+results[0].pose.nose.x);
    console.log("nose y is "+results[0].pose.nose.y)
}
else{
console.log("error")
}
}