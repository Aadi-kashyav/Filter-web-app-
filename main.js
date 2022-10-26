nose_x = 0;
nose_y = 0;
function preload() {
    mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    image(video,0,0,300,300);
    image(mustache,nose_x,nose_y,50,30)
}
function take_snapshot() {
    save('MyfilterImage.png');
}
    classifier = ml5.imageClassifier('MobileNet',modelLoaded);
function modelLoaded() {
    console.log('Posenet is Initialized')
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x - 18;
        nose_y = results[0].pose.nose.y + 7;
        console.log("nose x = " + nose_x);
        console.log("nose y = " +nose_y);
    }
}