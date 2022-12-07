import {sections} from '/assets/sections/sections.js';
import { HeaderBurger } from '/assets/components/header_burger.js';
customElements.define('header-burger', HeaderBurger);
export class HeaderItem extends HTMLElement {
    constructor () {
        super();
        this.onscene = '';
        this.sectionheader = '';
        this.headeropen = '';
    }
    connectedCallback() {
        this.render();             
    }
    static get observedAttributes() {
        return ['onscene', 'sectionheader', 'headeropen'];
    }
    attributeChangedCallback(attr, prev, next) {
        if(prev !== next) {
            this[`${attr}`] = next;
            this.render();
        }
    }
      
    render() { 
        this.innerHTML = `
        <style>
            header-item {
                position: fixed;
                top: 0;
                text-align: center;
                z-index: 11;
                
            }
            .header {
                width: 100%;
            }
            .headerMenu {
                height: 56px;
                display: flex;
                align-items: center; 
                cursor: pointer;
            }            
            .headerMenu.active {
                height: 70px;
                
                box-shadow: 0px -3px 30px #93141461;
            }
            .headerMenu.active h4 {
                font-size: 1.5rem;
            }            
                      
            @media (max-width: 1199.98px) {
                
            }

            @media (max-width: 991.98px) {
            }

            @media (max-width: 767.98px),
            (orientation: portrait) {
                header {
                    height: 77px;                
                }
                .headerMenu {
                    justify-content: flex-start;
                }
                .headerMenu>p {
                    padding-left: 24px;
                }   
            }
            @media (max-width: 575.98px) {
            }
        </style>
        <header-burger class="${this.headeropen}"></header-burger>        
        <div class="header">
            
        </div>
        `;
        let hdr = document.querySelector('.header');
        for (let section of sections) {
            let hm = document.createElement('div');
            hm.classList.add('headerMenu', 'f-centered');
            hm.style.background = section.bgnd;
            hm.innerHTML = '<h4>' + section.header + '</h4>';
            hdr.appendChild(hm);                  
            if (section.tagName==this.getAttribute('onscene')) {
                hm.classList.add('active');
            };
            if(this.headeropen!='open'&&!hm.classList.contains('active')) { hm.style.display = 'none';
            } else { hm.style.display = 'flex';} 
        }         
    }    
}