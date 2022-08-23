NoseX = 0
NoseY = 0
function preload(){
    ClownNose=loadImage("https://1ab7t83ossu73um951g2vaw3-wpengine.netdna-ssl.com/wp-content/uploads/2016/09/abbce-mustache2.png")
}

function setup(){
    canvas = createCanvas(300,300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300,300)
    video.center()
    video.hide()

    PoseNet= ml5.poseNet(video,ModelLoaded)
    PoseNet.on('pose',gotPoses)
}

function ModelLoaded(){
    console.log("PoseNet is Initialized")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        NoseX= results[0].pose.nose.x-15;
        NoseY= results[0].pose.nose.y-15;
    }
}

function draw(){
image(video,0,0,300,300)
image(ClownNose,NoseX,NoseY,30,30)
}

function take_snapshot(){
    save("ClownNoseFilter.png")
}