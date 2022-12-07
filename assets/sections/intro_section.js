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
            <h1 style="text-align: center;">Начни с пустого <a href="">шаблона</a></h1>            
        </section> 
        `;        
    }
}