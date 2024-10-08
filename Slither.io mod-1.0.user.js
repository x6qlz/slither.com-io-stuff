// ==UserScript==
// @name         Slither.io mod
// @version      1.0
// @description  zoom out
// @author       x6qlz (sammie7026)
// @match        http://slither.com/io
// @grant        GM_addStyle
// @noframes
// @downloadURL
// @updateURL
// ==/UserScript==

var zoomNum = 1;
var maxZoom = 3;
var minZoom = 0.2;
var zoomRate = 0.1;

function changeZoom(e) {
    e.preventDefault();
    var delta = (e.wheelDelta / Math.abs(e.wheelDelta));
    zoomNum += zoomRate * delta;

    zoomNum = Math.min(maxZoom, Math.max(minZoom, zoomNum));
    unsafeWindow.gsc = zoomNum;
}

document.addEventListener("mousewheel", changeZoom);
document.addEventListener("DOMMouseScroll", changeZoom);

var playButton = document.querySelector(".sadu1");
playButton.addEventListener("click", function() {
    setTimeout(() => {
        console.log("Zoom functionality activated.");
    }, 1000);
});
