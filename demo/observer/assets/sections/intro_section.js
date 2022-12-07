export class IntroSection extends HTMLElement {
    constructor () {
        super();
        this.header = "Привет, Мир!";        
    }
    connectedCallback() {  
        this.render();
    } 
    static get observedAttributes() {
        return []; 
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
            intro-section {
                overflow-x: hidden;
            }
            section.intro-section {
                padding-top: 150px;
                font-weight: 600;
                text-align: center;
                display: flex;
                flex-flow: column;
                justify-content: space-evenly;
            }
            h2 {
                font-weight: 300;
                line-height: 1;
                margin: 12px;
            }
            .stack {
                margin: 52px 0;
                height: 210px;
                position: relative; 
            }
            .stack-card {
                position: absolute;
                width: 210px;
                height: 210px;
                border-radius: 50%;
                background: radial-gradient(circle at center, #ffffff99,  #ffffff55);                
                border: 2px solid #ffffffaa;
                color: var(--d-txt);
                font-size: 2rem;
                font-weight: 300;
            }
            .stack-card:first-child {
                top: calc(50% - 105px);
                left: calc(20% - 105px);
            }
            .stack-card:nth-child(2) {
                top: 0;
                left: calc(40% - 105px);
            }
            .stack-card:nth-child(3) {
                bottom: 0;
                left: calc(60% - 105px);
            }
            .stack-card:nth-child(4) {
                top: calc(50% - 105px);
                left: calc(80% - 105px);
            }
            @media (max-width: 1199.98px) {
                
            }

            @media (max-width: 991.98px) {
                .stack {
                    height: 400px;
                }
                .stack-card:nth-child(2), .stack-card:nth-child(3) {
                    left: calc(50% - 105px);
                }
            }

            @media (max-width: 767.98px),
            (orientation: portrait) {
                
            }
            @media (max-width: 575.98px) {
               
            }
        </style>        
        <section class="intro-section">
            <h1>Шаблон Лендингов</h1>
            <a href="">( LLTemplate )</a>
            <h2>Лёгкая бесплатная заготовка</h2>
            <h2>для свободного творчества</h2>
            <h2>в создании креативных</h2>
            <h2>интернет страниц</h2>
            <div class="stack">
                <div class="stack-card f-centered">HTML5</div>
                <div class="stack-card f-centered">CSS3</div>
                <div class="stack-card f-centered">ES6</div>
                <div class="stack-card f-centered">Web Components</div>
            </div>
        </section> 
        `;        
    }
}