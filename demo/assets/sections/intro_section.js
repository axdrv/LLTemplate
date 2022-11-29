export class IntroSection extends HTMLElement {
    constructor () {
        super(); 
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
            section.intro {
            }
            h1 {
                color: var(--l-base);
                font-weight: 600;
                text-align: center;
                position: sticky;
                top: 200px;
            }
        </style>        
        <section class="intro">
            <h1>Привет Мир!</h1>
        </section> 
        `;        
    }
}