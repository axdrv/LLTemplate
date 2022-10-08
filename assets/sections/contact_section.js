export class ContactSection extends HTMLElement {
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
        
        </style> 
        <section class="contact">            
            I am Contact Section
        </section>
        </div>
        `;
    }
}