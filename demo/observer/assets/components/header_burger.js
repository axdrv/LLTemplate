import {sections} from '/assets/sections/sections.js';
export class HeaderBurger extends HTMLElement {
    constructor () {
        super();
        this.hb = '';
        this.headeropen = false;
    }
    connectedCallback() {  
        this.render();      
    } 
    static get observedAttributes() {
        return ['headeropen'];
    } 
    attributeChangedCallback(attr, prev, next) {
            if(prev !== next) {
            this[`${attr}`] = next;
        }
        this.render();
    }
    render() {
        this.innerHTML = `
        <style>
            header-burger {                
                display: block;
                width: 100%;
                max-width: 1100px;
                z-index: 100;
                position: relative;
                margin: 0 auto;
                cursor: pointer;
            }
            header-burger.open {
                display: none;
            }
            .headerBurger {
                position: absolute;
                top: 14px;
                right: 24px;            
                width: 52px;
            }
            
            .strip {
               background: var(--l-base); 
               height: 2.2px;
               margin: 5px 0 5px 12px;
               padding: 0;
               border: 0;               
               border-radius: 2px;
            }
            .strip.active{
                margin: 5px 0 5px 0;
            }                
        </style>
            <div class="headerBurger">
            </div>        
        `;
        this.hb = this.querySelector('.headerBurger');
        for (let section of sections) {
            let strip = document.createElement('div');
            strip.classList.add('strip');
            this.hb.appendChild(strip);
            section.classList.contains('active')?strip.classList.add('active'):strip.classList.remove('active');

        }  
        
    }
}