import {sections} from '/assets/sections/sections.js';
import {HeaderBurger} from '/assets/layout/header/header_burger.js';
import { animateHeader, animateUpDownChange} from '/assets/layout/header/header.js';
customElements.define('header-burger', HeaderBurger);
export class HeaderItem extends HTMLElement {
    constructor () {
        super();
        this.rendered = false; //get true after render(). this attributeChangedCallback do not operate with undefined elements on beginning;
        this.sectionheader = '';
        //this.focused = '';
        this.scrollDir = '';
    }
    connectedCallback() {
        this.setAttribute('focused', '');
        this.render();             
    }
    static get observedAttributes() {
        return ['sectionheader', 'focused'];
    }
    attributeChangedCallback(attr, prev, next) {
        if(prev !== next) {
            //this[`${attr}`] = next;
            if (this.rendered) {
                this.update(attr, prev, next);
            }
        }        
    }
    update (attr, prev, next) {
        //children attributes update
        let hasAttr = this.querySelectorAll('['+attr+']');
        hasAttr.forEach((elt) => {
            elt.setAttribute(attr, next)
        })
        //own Elements update
        if (attr=='sectionheader') {
            let bgnd;            
            let h3 = this.querySelector('h3');
            sections.forEach(section => {
                if (section.header==next) {
                    bgnd=section.bgnd;}
            })
            animateUpDownChange(h3, prev, next, this.scrollDir, bgnd)
        }
        if (attr=='focused') {
            animateHeader(this.querySelectorAll('.header-menu'), next);
        }
    }
    clickSniffer(target) {//target arg is an optional clicked element, when need acknowlege
        this.getAttribute('focused')!='focused'?this.setAttribute('focused','focused'):this.setAttribute('focused','');
    } 
    render() { 
        this.innerHTML = `
        <style>
            @import url(/assets/layout/header/header.css);
        </style>           
        <header>
            <h3 class="innerHTML"></h3>
            <header-burger sectionheader focused></header-burger>
        </header>
        `;
        sections.forEach((section, idx) => {
            let headerMenu = document.createElement('div');
            headerMenu.style.background = section.bgnd;                
            headerMenu.classList.add('header-menu');
            let menuHeader = document.createElement('h4');
            menuHeader.innerHTML = section.header;
            headerMenu.appendChild(menuHeader)
            headerMenu.addEventListener('click', (e)=> {
                setTimeout( () => {window.scrollTo({top: section.getBoundingClientRect().top+window.pageYOffset, behavior:'smooth'})}, 300);
            })
            this.querySelector('header').appendChild(headerMenu);

        })
        this.rendered = true;        
    }    
}