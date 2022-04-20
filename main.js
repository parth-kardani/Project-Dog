status="";
objects=[];


function preload(){
img= loadImage("dog_cat.jpg");
}

function setup(){
canvas= createCanvas(650,400);
canvas.center();
objectDetecter=ml5.objectDetector("cocossd",modelloaded);
document.getElementById("status").innerHTML= "status: Detecting object";
}

function draw(){
image(img, 0, 0, 650,400);


if( status != "" ){
for(i=0; i<objects.length; i++){
    document.getElementById("status").innerHTML= "status: object detected";
    fill("#FF0000");
    percent=floor(objects[i].confidence*100);
    text(objects[i].label + "  "+ percent+"%",objects[i].x,objects[i].y);
    noFill();
    stroke("#FF0000");
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}    
}

}

function modelloaded(){
    console.log(" model is loaded");
    status="true";
    objectDetecter.detect(img,gotResult);
}

function gotResult(error,results){
if( error){
    console.error(error);
}
else{
    console.log(results);
    objects=results;

}
}