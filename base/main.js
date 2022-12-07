import {XY} from '/assets/globals/XY.js';
import {HeaderItem, FooterItem} from '/assets/layout/layout.js';
import {sections} from '/assets/sections/sections.js'
let main = document.querySelector('main');
for (let section of sections)
{
    main.appendChild(section);
}


//global Listeners
document.addEventListener('DOMContentLoaded', ()=>{
    XY.initXY();
});
window.addEventListener('resize', ()=>{
    XY.initXY();
});

//Functions
