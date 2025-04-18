﻿var photoOrder = [1, 2, 3, 4, 5];
var figureCount = 3;
var autoSlide = setInterval(rightAdvance, 2000);

/* add source values to img elements based on order specified in photoOrder array */
function populateFigures() {
    // declare local variables
    var filename;
    var currentFig;

    if (figureCount === 3) {
        for (var i = 1; i < 4; i++) {
            filename = "images/IMG_0" + photoOrder[i] + "sm.jpg";
            currentFig = document.getElementsByTagName("img")[i - 1];
            currentFig.src = filename;
        }
    } else {
        for (var i = 0; i < 5; i++) {
            filename = "images/IMG_0" + photoOrder[i] + "sm.jpg";
            currentFig = document.getElementsByTagName("img")[i];
            currentFig.src = filename;
        }
    }
}

function rightArrow() {
    rightAdvance();
    clearInterval(autoSlide);
}

function rightAdvance() {
    for (var i = 0; i < 5; i++) {
        if ((photoOrder[i] + 1) === 6) {
            photoOrder[i] = 1;
        } else {
            photoOrder[i] += 1;
        }
        populateFigures();
    }
}

function leftArrow() {
    for (var i = 0; i < 5; i++) {
        if ((photoOrder[i] - 1) === 0) {
            photoOrder[i] = 5;
        } else {
            photoOrder[i] -= 1;
        }
        populateFigures();
        clearInterval(autoSlide);

    }
}

///* switch to 5-image layout */
//function previewFive() {
//    var articleEl = document.getElementsByTagName("article")[0];

//    // create figure and img elements for fifth image
//    var lastFigure = document.createElement("figure");
//    lastFigure.id = "fig5";
//    lastFigure.style.zIndex = "5";
//    lastFigure.style.position = "absolute";
//    lastFigure.style.right = "45px";
//    lastFigure.style.top = "67px";

//    var lastImage = document.createElement("img");
//    lastImage.width = "240";
//    lastImage.height = "135";

//    // append lastImage child node to parent node lastFigure
//    lastFigure.appendChild(lastImage);

//    // attach lastFigure document fragment as a child of article element
//    // articleEl.appendChild(lastFigure);

//    articleEl.insertBefore(lastFigure, document.getElementById("rightarrow"));

//    // clone figure element for fifth image and edit to be first image
//    var firstFigure = lastFigure.cloneNode(true);
//    firstFigure.id = "fig1";
//    // clear value for right CSS style
//    firstFigure.style.right = "";
//    firstFigure.style.left = "45px";

//    articleEl.insertBefore(firstFigure, document.getElementById("fig2"))

//    // set figure count from default value of 3 to 5
//    figureCount = 5;

//    // add appropriate src values to two new img elements
//    document.getElementsByTagName("img")[0].src = "images/IMG_0" + photoOrder[0] + "sm.jpg";
//    document.getElementsByTagName("img")[4].src = "images/IMG_0" + photoOrder[4] + "sm.jpg";

//    // change button to hide extra images
//    var numberButton = document.querySelector("#fiveButton p");
//    numberButton.innerHTML = "Show fewer images";
//    if (numberButton.addEventListener) {
//        numberButton.removeEventListener("click", previewFive, false);
//        numberButton.addEventListener("click", previewThree, false);
//    } else if (numberButton.attachEvent) {
//        numberButton.detachEvent("onclick", previewFive);
//        numberButton.attachEvent("onclick", previewThree);
//    }
//}

///* switch to 3-image layout */
//function previewThree() {
//    var articleEl = document.getElementsByTagName("article")[0];
//    var numberButton = document.querySelector("#fiveButton p");

//    // remove first and fifth figure elements
//    // note: because neither statement assigns result to a variable, the removed nodes are deleted and do not remain in computer memory
//    articleEl.removeChild(document.getElementById("fig1"));
//    articleEl.removeChild(document.getElementById("fig5"));

//    figureCount = 3;
//    numberButton.innerHTML = "Show more images";
//    if (numberButton.addEventListener) {
//        numberButton.removeEventListener("click", previewThree, false);
//        numberButton.addEventListener("click", previewFive, false);
//    } else if (numberButton.attachEvent) {
//        numberButton.detachEvent("onclick", previewThree);
//        numberButton.attachEvent("onclick", previewFive);
//    }
//}

/* create event listeners for left arrow, right arrow and center figure element */
function createEventListeners() {
    $(document).ready(function () {
        $("#leftarrow").click(function () {
            var leftarrow = document.getElementById("leftarrow");
            if (leftarrow.addEventListener) {
                leftarrow.addEventListener("click", leftArrow, false);
            } else if (leftarrow.attachEvent) {
                leftarrow.attackEvent("onclick", leftArrow);
            }
        });
        $(document).ready(function () {
            $("#rightarrow").click(function () {
                var rightarrow = document.getElementById("rightarrow");
                if (rightarrow.addEventListener) {
                    rightarrow.addEventListener("click", rightArrow, false);
                } else if (rightarrow.attachEvent) {
                    rightarrow.attackEvent("onclick", rightArrow);
                }
            });
        });

            //var mainFig = document.getElementsByTagName("img")[1];
            //if (mainFig.addEventListener) {
            //    mainFig.addEventListener("click", zoomFig, false);
            //} else if (mainFig.attachEvent) {
            //    mainFig.attachEvent("onclick", zoomFig);
            //}
            //var showAllButton = document.querySelector("#fiveButton p");
            //if (showAllButton.addEventListener) {
            //    showAllButton.addEventListener("click", previewFive, false);
            //} else if (showAllButton.attachEvent) {
            //    showAllButton.attachEvent("onclick", previewFive);
            //}
    });
}

///* open center figure in separate window */
//function zoomFig() {
//    var propertyWidth = 960;
//    var propertyHeight = 600;
//    var winLeft = ((screen.width - propertyWidth) / 2);
//    var winTop = ((screen.height - propertyHeight) / 2);
//    var winOptions = "width=960,height=600";
//    winOptions += ",left=" + winLeft;
//    winOptions = + ",top=" + winTop;
//    var zoomWindow = window.open("zoom.htm", "zoomwin", winOptions);
//    zoomWindow.focus();
//}

/* create event listeners and populate image elements */
function setUpPage() {
    createEventListeners();
    populateFigures();
}

/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}