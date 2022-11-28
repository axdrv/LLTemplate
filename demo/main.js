import {isTouchDevice} from '/assets/modules/isTouch.js';
import {XY} from '/assets/modules/XY.js';
let isTouch = isTouchDevice();
const main = document.querySelector('main');
const sections = main.children;
function init(isTouch) {
    isTouch?mobV():deskV();
}

document.addEventListener('DOMContentLoaded', ()=>{
    XY.initXY();
    init(isTouch);});
window.addEventListener('resize', ()=>{XY.initXY()});
document.addEventListener('scroll', ()=> {
    for (let child of sections) {
        child.getBoundingClientRect().top<XY.hlf&&child.getBoundingClientRect().bottom>XY.hlf?child.classList.add('active'):child.classList.remove('active');
    }
});




















//Below are aux functions.
function mobV() {
    console.log('Mobile functionality applied');
}
function deskV() {
    console.log('Desktop functionality applied');
}


