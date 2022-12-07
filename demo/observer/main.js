import {isTouch, XY} from '/assets/globals/globals.js';
import {globalBgnd, HeaderItem, FooterItem} from '/assets/layout/layout.js';
import {sections} from '/assets/sections/sections.js'

let main = document.querySelector('main'),
globalBgndElt = document.querySelector('global-background-item'),
headerItem = document.querySelector('header-item');
let observer = new MutationObserver(mutations => { 
    for (let mutation of mutations) {
        if (mutation.target.classList.contains('active')) {
                globalBgndElt.setAttribute('onscene', mutation.target.tagName); 
                headerItem.setAttribute('onscene', mutation.target.tagName);
                headerItem.setAttribute('sectionheader', mutation.target.header);
        }
    }
});
for (let section of sections)
{
    section.bgnd = 'var(--'+ section.tagName.toLowerCase() + ')';
    main.appendChild(section);
    observer.observe(section, {attributes: true});        
}


//global Listeners
document.addEventListener('DOMContentLoaded', ()=>{
    XY.initXY();
    scrollHandler();
});
window.addEventListener('resize', ()=>{
    XY.initXY();
    scrollHandler();
});
document.addEventListener('scroll', scrollHandler, false);
document.addEventListener('click', clickHandler, false);

//Functions
function scrollHandler () {
    headerItem.setAttribute('headeropen', '')
    for (let section of sections) {
        if (section.getBoundingClientRect().top<XY.quarter&&section.getBoundingClientRect().bottom>XY.quarter&&!section.classList.contains('active')) {
            section.classList.add('active');
        } else if ((section.getBoundingClientRect().top>XY.quarter||section.getBoundingClientRect().bottom<XY.quarter)&&section.classList.contains('active')) {
            section.classList.remove('active')
        }
    } 
}
function clickHandler(e) {
    // listener 'click' event for header
    let isHeader = e.target.closest('header-item');
    if (headerItem==isHeader&&headerItem.getAttribute('headeropen')=='') {
    headerItem.setAttribute('headeropen', 'open');        
    } else if (headerItem==isHeader&&headerItem.getAttribute('headeropen')=='open') {
        for (let section of sections) {
            section.header==e.target.innerText?          
            window.scrollTo(0, section.getBoundingClientRect().top+window.pageYOffset):false;
        }
    headerItem.setAttribute('headeropen', '');        
    } else {headerItem.setAttribute('headeropen', '')};
}