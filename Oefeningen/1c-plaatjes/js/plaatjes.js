"use strict";

function mijnFunctie1() {
    window.document.images[0].src='images/basset2.png';
}
function mijnFunctie2() {
    window.document.images[0].src='images/basset1.jpg';
}

document.getElementById("basset").onmouseover = function(){mijnFunctie1()};
document.getElementById("basset").onmouseout = function(){mijnFunctie2()};