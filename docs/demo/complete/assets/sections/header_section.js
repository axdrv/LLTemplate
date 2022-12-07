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
        this.sectionName = ''
    }

    connectedCallback() {
        this.render();
        this.init(); 
    }
    static get observedAttributes() {
        return ['onscene', 'updown'];
    }
    attributeChangedCallback(attr, prev, next) {
        if(prev !== next) {
            this[`${attr}`] = next;
            this.update();
        }
    }
    init() {
        this.sectionName = this.querySelector('#sectionName');
    }
    update() {
        let ud = this.getAttribute('updown');
        let contrUd = ud=='up'?'down':'up';
        this.sectionName.classList.add(ud);
        setTimeout(()=> {
            this.sectionName.classList.replace(ud, contrUd);
            },150)
        setTimeout(()=> {
            this.sectionName.classList.remove('up', 'down');
        },300)
        for (let section of this.sections) {
            if (section.tag==this.getAttribute('onscene')) {                
                setTimeout(()=>{this.sectionName.innerText = section.name;},300) 
                this.style.backgroundColor = section.bgnd;
                this.animate({background: section.bgnd}, {duration: 400, fill: 'forwards'})
            };
        }
    }
    render() { 
        this.innerHTML = `
        <style>
            header-section {
                position: fixed;
                top: 0;
                height: 77px;
                z-index: 1000;
            }
            header {
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
            }
            .onSceneIndicators {
                width: 100%;
                height: 4px;
                display: flex;
                flex-flow: row nowrap;
                justify-content: stretch;
                align-content: stretch;
            }
            .onSceneIndicator {
                flex: 1 0 auto;
            }
            #sectionName {
                font-size: 1.5rem;
                line-height: 1;
                margin: 20px;
                font-weight: bold;
                color: var(--l-base);
                transform: translateY(0);
                opacity: 1;
                transition: transform 140ms ease-out 40ms, opacity 100ms ease-in;
            }
            #sectionName.up {
                transform: translateY(300px);
                opacity: 0;
                transition: transform 140ms ease-out 40ms, opacity 100ms ease-in;
            }
            #sectionName.down {
                transform: translateY(-300px);
                opacity: 0;
                transition: transform 140ms ease-out 40ms, opacity 100ms ease-in;
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
        
        <header>
            <p id="sectionName"></p>
        </header>
        <div class="onSceneIndicators">
            <div class="onSceneIndicator" style="background-color: var(--intro-section);"></div><div class="onSceneIndicator" style="background-color: var(--about-section);"></div><div class="onSceneIndicator" style="background-color: var(--faq-section);"></div><div class="onSceneIndicator" style="background-color: var(--custom-section);"></div><div class="onSceneIndicator" style="background-color: var(--contact-section);"></div>
        </div>   
        `;
    }    
}