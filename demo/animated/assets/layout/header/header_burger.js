import {sections} from '/assets/sections/sections.js';
import {toggleBurger} from '/assets/layout/header/header.js';
export class HeaderBurger extends HTMLElement {
    constructor () {
        super();
        this.rendered = false;
        this.sectionheader = false;
    }
    connectedCallback() {  
        this.render();            
    } 
    static get observedAttributes() {
        return ['focused', 'sectionheader'];
    } 
    attributeChangedCallback(attr, prev, next) {
        if(prev !== next&&this.rendered) {            
                this.update(attr, prev, next);
        }
    }
    update(attr, prev, next) {
        let strips = document.querySelectorAll('.strip');
        let updateActive = () =>{
            sections.forEach((val, idx) => {
                val.header==this.getAttribute('sectionheader')?strips[idx].classList.add('active'):strips[idx].classList.remove('active');
            })
        }
        if (attr == 'sectionheader') {
            updateActive();
        }
        if (attr=='focused') {
            toggleBurger(this, next);
            next=="focused"?false:updateActive();
        }
    }
    render() { 
        let middleUp = Math.floor((sections.length-1)/2);
        sections.forEach((section, idx)=> {            
            let strip = document.createElement('div');
            strip.classList.add('strip');            
            if (middleUp==idx) {
                strip.classList.add('burger_upper');
            }
            else if (middleUp+1==idx) {
                strip.classList.add('burger_lower');
            } else {strip.classList.add('burger_hidden');}
                this.appendChild(strip);
        }); 
        this.rendered = true;        
        this.update();
    }
}