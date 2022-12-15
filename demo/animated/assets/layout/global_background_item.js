import {sections} from '/assets/sections/sections.js';
export class GlobalBgnd extends HTMLElement {
    constructor () {
        super(); 

    }
    connectedCallback() {  
        this.render();
    } 
    static get observedAttributes() {
        return ['sectionheader']; 
    } 
    attributeChangedCallback(attr, prev, next) {
        if(prev !== next) {
            this.update(attr, prev, next);
       }
    }
    update (attr, prev, next) {
        sections.forEach(section=> {
           section.header==this.getAttribute('sectionheader')?this.style.
            background='linear-gradient(135deg, ' +section.bgnd+', var(--d-base))':false;
            
        })
    }
    render() {
        this.innerHTML = `
        <style>
        global-background-item {
            position: fixed;
            height: 100vh;
            left: 0;
            right: 0;
            top: 0;            
            bottom: 0;
            z-index: -10;
        }
        </style> 
        `;
    }
}