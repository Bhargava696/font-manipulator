cy = 0;
cx = 0;
han1x = 0;
han2x = 0;
carmionium = 0;
ee = document.getElementById("jiok").value;

function preload() {
    font = loadFont("Roboto-MediumItalic.ttf");
}

function setup() {
    saer = createCapture(VIDEO);
    detriounium = createCanvas(500, 400);
    detriounium.position(510, 250);
    saer.size(500, 500);
    hoodRobin = ml5.poseNet(saer, modelLoaded);
    hoodRobin.on("pose", gotPoses);
}

function draw() {
    background("#527bf5");
    fill("#14ff80");
    text("text", cx, cy);
    textSize(carmionium);
}

function modelLoaded() {
    console.log("model loaded");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        cx = results[0].pose.nose.x;
        cy = results[0].pose.nose.y;
        console.log("X = " + cx + " Y = " + cy);
        han1x = results[0].pose.rightWrist.x;
        han2x = results[0].pose.leftWrist.x;
        console.log("Left wrist = " + han2x + " Right wrist is = " + han1x);
        carmionium = floor(han2x - han1x);
        console.log(carmionium);
    }
}