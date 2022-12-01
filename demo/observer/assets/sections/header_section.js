export class HeaderSection extends HTMLElement {
    constructor () {
        super();
        this.sections = [
            {
                tag: 'INTRO-SECTION',
                name: 'Блок Приветствие',
                bgnd: "var(--intro-section)"
        
            },
            {
                tag: 'ABOUT-SECTION',
                name: 'Блок "О нас"',
                bgnd: "var(--about-section)"
        
            },
            {
                tag: 'FAQ-SECTION',
                name: 'Блок Вопросы',
                bgnd: "var(--faq-section)"
        
            },
            {
                tag: 'CUSTOM-SECTION',
                name: 'Отдельный блок',
                bgnd: "var(--custom-section)"
        
            },
            {
                tag: 'CONTACT-SECTION',
                name: 'Блок Контактов',
                bgnd: "var(--contact-section)"
        
            }            
        ];
        this.sectionName = ''
    }

    connectedCallback() {
        this.render();
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
                height: 77px;
                z-index: 1000;
                display: flex;
                flex-flow: column;
                justify-content: flex-end;
                box-shadow: 0px -3px 30px #93141461;
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
            <div class="onSceneIndicator" style="background-color: var(--intro-section);"></div>
            <div class="onSceneIndicator" style="background-color: var(--about-section);"></div>
            <div class="onSceneIndicator" style="background-color: var(--faq-section);"></div>
            <div class="onSceneIndicator" style="background-color: var(--custom-section);"></div>
            <div class="onSceneIndicator" style="background-color: var(--contact-section);"></div>
        </div>   
        `;
        this.sectionName = this.querySelector('#sectionName');
        for (let section of this.sections) {
            if (section.tag==this.getAttribute('onscene')) {
                this.sectionName.innerText = section.name; 
                this.style.backgroundColor = section.bgnd;
            };
        }
    }    
}