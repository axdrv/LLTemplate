export class HeaderSection extends HTMLElement {
    constructor () {
        super();
        this.sections = [
            {
                tag: 'INTRO-SECTION',
                name: 'Intro Section',
                bgnd: "var(--intro-section)"
        
            },
            {
                tag: 'ABOUT-SECTION',
                name: 'About Section',
                bgnd: "var(--about-section)"
        
            },
            {
                tag: 'FAQ-SECTION',
                name: 'F.A.Q. Section',
                bgnd: "var(--faq-section)"
        
            },
            {
                tag: 'CUSTOM-SECTION',
                name: 'Custom Section',
                bgnd: "var(--custom-section)"
        
            },
            {
                tag: 'CONTACT-SECTION',
                name: 'Contact Section',
                bgnd: "var(--contact-section)"
        
            }            
        ];
        this.onScene = '';
    }

    connectedCallback() {
        this.render(); //
    }
    static get observedAttributes() {
        return ['onscene'];
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
            header-section {
                position: fixed;
                top: 0;
                height: 127px;
                background: #dc143cdd;
                z-index: 1000;
            }
            header {
                display: flex;
                flex-flow: column;
                align-items: center;
                justify-content: center;
                height: inherit;
            }
            .onSceneIndicators {
                width: 100%;
                height: 24px;
                display: flex;
                flex-flow: row nowrap;
                justify-content: stretch;
                align-content: stretch;
                background-color: grey;                
            }
            .onSceneIndicator {
                flex: 1 0 auto;
            }
            header>p {
                font-size: 1.5rem;
                font-weight: bold;
                color: var(--l-base);
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
            }
            @media (max-width: 575.98px) {
            }
        </style>
        <div class="onSceneIndicators"></div>
        <header>
            <p id="sectionName"></p>
        </header>                
        `;   
        let indicators = this.querySelector('.onSceneIndicators'),
        sectionName = this.querySelector('#sectionName');
        indicators.innerHTML = '';
        for (let section of this.sections) {
            let indicator = document.createElement('div');
            indicator.classList.add('onSceneIndicator');
            indicator.style.backgroundColor = section.bgnd;
            indicators.appendChild(indicator);
            if (section.tag==this.getAttribute('onscene')) {
                this.onScene = section.name;
                sectionName.innerText = `${this.onScene}`;
                this.style.backgroundColor = section.bgnd;
            };
        }

            
    }
}