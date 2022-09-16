let photoOrder = [1, 2, 3, 4, 5, 6];

var figCount = 3;
var favourites = 0;

function populateFigures() {
    var filename;
    var currentFig;

    if (figCount === 3) {
        for (var i = 1; i < 4; i++) {
            filename = "Images/Deeppinkpic" + photoOrder[i] + "Images/Deeppinkpic.jpg";
            currentFig = document.getElementsByTagName("img")[i - 1];
            currentFig.src = filename;
        }
    }
    else {
        for (var i = 0; i < 5; i++) {
            filename = "Images/Deeppinkpic" + photoOrder[i] + "Images/Deeppinkpic.jpg";
            currentFig = document.getElementsByTagName("img")[i];
            currentFig.src = filename;
        }
    }
}


let pic = $(".gallery_pic");

let i = 0;

setInterval(function () {
    i = (i + 1) % photoOrder.length;
    $(document).ready(function () {
        pic.fadeOut(1000, () => {
            piic.attr('src', photoOrder[i])
        }pic.fadeIn(1000))
})








function rightArrow() {
    for (var i = 0; i < 5; i++) {
        if ((photoOrder[i] + 1) === 6) {
            photoOrder[i] = 1;
        }
        else {
            photoOrder[i] += 1;
        }
        populateFigures();
    }
}


function leftArrow() {
    for (var i = 0; i < 5; i++) {
        if ((photoOrder[i] - 1) === 0) {
            photoOrder[i] = 5;
        }
        else {
            photoOrder[i] -= 1;
        }
        populateFigures();
    }
}

function createEventListeners() {
    var leftarrow = document.getElementById("leftarrow");

    if (leftarrow.addEventListener) {
        leftarrow.addEventListener("click", leftArrow, false);
    }
    else if (leftarrow.attachEvent) {
        leftarrow.attachEvent("onclick", leftArrow);
    }

    var rightarrow = document.getElementById("rightarrow");

    if (rightarrow.addEventListener) {
        rightarrow.addEventListener("click", rightArrow, false);
    }
    else if (rightarrow.attachEvent) {
        rightarrow.attachEvent("onclick", rightArrow);
    }
}

function setUpPage() {
    createEventListeners();
    populateFigures();
}
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}
