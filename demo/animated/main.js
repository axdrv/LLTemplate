import {XY} from '/assets/globals/globals.js';
import {HeaderItem, FooterItem} from '/assets/layout/layout.js';
import {sections} from '/assets/sections/sections.js';
let clickListeners, main, headerItem, bgndItem;

//global Listeners
document.addEventListener('DOMContentLoaded', ()=>{
    init();
    XY.initXY();
    sections.forEach(section=> {
        main.appendChild(section);                
    })   
});
window.onload = () => {
    scrollHandler();}
window.addEventListener('resize', ()=>{
    XY.initXY();
    scrollHandler();
});
document.addEventListener('scroll', scrollHandler, false);
document.addEventListener('click', clickHandler, false);

//Functions
function init() {
    main = document.querySelector('main');
    headerItem = document.querySelector('header-item');
    bgndItem=document.querySelector('global-background-item');
    clickListeners = document.querySelectorAll('[clicklistener]');
}

function scrollHandler () {
    let st = window.pageYOffset || document.documentElement.scrollTop;//https://stackoverflow.com/questions/31223341/detecting-scroll-direction
    st > XY.lastScrollTop?XY.scrollDir='down':XY.scrollDir='up';
    XY.lastScrollTop = st <= 0 ? 0 : st;
    headerItem.getAttribute('focused')=='focused'?headerItem.setAttribute('focused', ''):false;
    for (let section of sections) {
        if (section.getBoundingClientRect().top<XY.quarter&&section.getBoundingClientRect().bottom>XY.quarter){
            if (section.header != headerItem.sectionheader) {
                headerItem.scrollDir = XY.scrollDir;
                headerItem.setAttribute('sectionheader', section.header);
                bgndItem.setAttribute('sectionheader', section.header);               
            }
        } 
    } 
}
function clickHandler(e) {
    let target = e.target;
    let listener = e.target.closest('[clicklistener]');
    clickListeners.forEach((elt, idx) => {
        listener&&listener==elt?listener.clickSniffer(target):elt.setAttribute('focused', '');
    });//Watch Bags
}
