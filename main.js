song1 = "music.mp3";
song2 = "music2.mp3";

function preload()
{
    song2 = loadSound("music2.mp3");
    song1 = loadSound("music.mp3");
}
function setup()
{
    canvas = createCanvas(400, 400);
    canvas.center();

    video =createCapture(VIDEO);
    video.hide();
}