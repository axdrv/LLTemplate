import {isTouchDevice} from '/assets/modules/isTouch.js';
import {XY} from '/assets/modules/XY.js';

let isTouch = isTouchDevice();
document.addEventListener('DOMContentLoaded', ()=>{
	XY.initXY();
});
window.addEventListener('resize', ()=>{
	XY.initXY();
});
