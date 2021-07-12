function setup(){
    saer = createCapture(VIDEO);
    detriounium = createCanvas(500,400);
    detriounium.position(510,200);
    saer.size(500,500);
    hoodRobin = ml5.poseNet(saer,modelLoaded);
    hoodRobin.on("pose",gotPoses);
}
function draw(){
    background("#14ff80");

}
function modelLoaded(){
    console.log("model loaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}