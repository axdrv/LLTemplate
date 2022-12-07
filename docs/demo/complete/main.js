import {Elements as elts} from '/assets/modules/elements.js';
import {XY} from '/assets/modules/XY.js';


function init(isTouch) {
    isTouch?mobV():deskV();
}

document.addEventListener('DOMContentLoaded', ()=>{
    XY.upDown = 'down';
    XY.initXY();
    scrollHandler();
    init(elts.isTouch);});
window.addEventListener('resize', ()=>{
    XY.initXY();
    scrollHandler();
});
document.addEventListener('scroll', (e)=> {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > elts.lastScrollTop){
        XY.upDown = 'down';
     } else {
        XY.upDown ='up';
     }
    elts.lastScrollTop = st <= 0 ? 0 : st;
    scrollHandler()

});

let observer = new MutationObserver(mutations => { 
    for (let mutation of mutations) {
        if (mutation.target.classList.contains('active')) {
                elts.globalBgnd.setAttribute('onScene', mutation.target.tagName); 
                elts.headerSection.setAttribute('onScene', mutation.target.tagName);
            }
        }
      
    });
for (let child of elts.main.children) {    
        observer.observe(child, {attributes: true});        
}


function scrollHandler () {
    for (let child of elts.main.children) {
        if (child.getBoundingClientRect().top<XY.hlf&&child.getBoundingClientRect().bottom>XY.hlf&&!child.classList.contains('active')) {
            child.classList.add('active');
            elts.headerSection.setAttribute('upDown', XY.upDown);
        } else if ((child.getBoundingClientRect().top>XY.hlf||child.getBoundingClientRect().bottom<XY.hlf)&&child.classList.contains('active')) {
            child.classList.remove('active')
        }
    } 
}







//Below are aux functions.
function mobV() {
    console.log('Mobile functionality applied');
}
function deskV() {
    console.log('Desktop functionality applied');
}


