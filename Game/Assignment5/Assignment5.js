// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext('2d');
var timer = 0;
var caught = false;
var fps = 5;
document.body.appendChild(canvas);
canvas.width = 512;
canvas.height = 480;

// Background image
var bgReady = false;
var bgImage = new Image();

bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = "https://media.istockphoto.com/photos/wooden-background-picture-id185250199?b=1&k=20&m=185250199&s=170667a&w=0&h=Bv89S_ekXc_38iyyTe2bjq9ZGhgi44xcWV63ditshm4=";

// bug image
var bugReady = false;
var bugImage = new Image();
bugImage.onload = function () {
    bugReady = true;
};
bugImage.src = "https://www.pngall.com/wp-content/uploads/4/True-Bug-PNG-HD-Image.png";

//var bug = {};

var bug = {
    x: 0,
    y: 0
};
var bugCaught = 0;

// When bug is caught, reset
var reset = function () {
    bug.x = 32  + (Math.random() * (canvas.width - 64));
    bug.y = 32  + (Math.random() * (canvas.height - 64));
};

//mousedown event
window.addEventListener("mousedown", onMouseDown, false);
function onMouseDown(e) {

    if (e.button != 0) return;

    mouseXinCanvas = e.clientX;
    mouseYinCanvas = e.clientY;

    if (bugBody(bug, mouseXinCanvas, mouseYinCanvas)) {
        caught = true;
        clearInterval(timer);
        timer = setInterval(reset, 20000 / fps);
        reset();
    }
    if (ResetScore(mouseXinCanvas, mouseYinCanvas)) {
        location.reload();
    }
    if (ResetSpeed(mouseXinCanvas, mouseYinCanvas)) {
        clearInterval(timer);
        timer = setInterval(reset, 20000 / fps);
        reset();
        render();
    }
};

//bug's body define
function bugBody(bug, x, y) {

    if (x <= (bug.x + 80) && bug.x <= (x + 80)
        && y <= (bug.y + 80)
        && bug.y <= (y + 80)
    ) {
        fps = fps + 5;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        bugCaught++;
        return true;
    }
    return false;
};

//Reset Score box
function ResetScore(x, y) {

    if (x > (305)
        && x < (545)
        && y > (15)
        && y < (85)
    ) {
        return true;
    }
    return false;
};

//Reset speed box
function ResetSpeed(x, y) {
    if (x > (605)
        && x < (845)
        && y > (15)
        && y < (85)
    ) {
        fps = 10;
        return true;
    }
    return false;
};

// Draw everything
var render = function () {
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 100);
    }
    if (bugReady) {
        ctx.drawImage(bugImage, bug.x, bug.y);
    }


    //if (caught == true) {
    //    if (bgReady) {
    //        ctx.drawImage(bgImage, 0, 100);
    //    }
    //    caught = false;
    //}

    // Score, Title
    ctx.fillStyle = "rgb(65, 100, 24)";
    ctx.font = "19px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Catch The Bug!!!", 5, 40);
    ctx.font = "20px Helvetica";
    ctx.fillText("Score: " + bugCaught, 5, 5);



    // Reset Score, Speed button
    document.fillStyle = "rgb(30, 168, 99)";
    ctx.fillRect(150, 10, 150, 80);
    ctx.fillRect(320, 10, 150, 80);
    ctx.fillStyle = "rgb(30, 268, 99)";
    ctx.fillRect(155, 15, 140, 70);
    ctx.fillRect(325, 15, 140, 70);
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.font = "20px Helvetica";
    ctx.fillText("Reset Score", 165, 30);
    ctx.fillText("Reset Speed", 335, 30);

};

// The main game loop
var main = function () {
    render();
    // Request to do this again ASAP
    requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();