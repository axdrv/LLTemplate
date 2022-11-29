import {isTouchDevice} from '/assets/modules/isTouch.js';
import {XY} from '/assets/modules/XY.js';
import {Elements as elts} from '/assets/modules/elements.js';
let isTouch = isTouchDevice();


document.addEventListener('DOMContentLoaded', ()=>{
    scrollHandler();
    XY.initXY();
    init(isTouch);});
window.addEventListener('resize', ()=>{
    XY.initXY();
    scrollHandler();
});
document.addEventListener('scroll', scrollHandler);

// functions
function init(isTouch) {
    isTouch?mobV():deskV();
}
function scrollHandler () {
    for (let child of elts.main.children) {
        child.getBoundingClientRect().top<XY.hlf&&child.getBoundingClientRect().bottom>XY.hlf&&!child.classList.contains('active')?child.classList.add('active'):(child.getBoundingClientRect().top>XY.hlf||child.getBoundingClientRect().bottom<XY.hlf)&&child.classList.contains('active')?child.classList.remove('active'):false; 
    }      
}


let observer = new MutationObserver(mutations => { 
    for (let mutation of mutations) {
        if (mutation.target.classList.contains('active')) {
                elts.header.setAttribute('onScene', mutation.target.tagName);
            }
        }
      
    });
for (let child of elts.main.children) {    
        observer.observe(child, {attributes: true});        
}




















//Below are aux functions.
function mobV() {
    console.log('Mobile functionality applied');
}
function deskV() {
    console.log('Desktop functionality applied');
}


