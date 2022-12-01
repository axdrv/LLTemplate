import {Elements as elts} from '/assets/modules/elements.js';
import {XY} from '/assets/modules/XY.js';

document.addEventListener('DOMContentLoaded', ()=>{
    XY.initXY();
    scrollHandler();
});
window.addEventListener('resize', ()=>{
    XY.initXY();
    scrollHandler();
});
document.addEventListener('scroll', scrollHandler, false);

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
        } else if ((child.getBoundingClientRect().top>XY.hlf||child.getBoundingClientRect().bottom<XY.hlf)&&child.classList.contains('active')) {
            child.classList.remove('active')
        }
    } 
}

