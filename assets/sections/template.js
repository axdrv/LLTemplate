export class ChangeNameAround extends HTMLElement {
    constructor () { // this is template only
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
            
            @media (max-width: 767.98px),
            (orientation: portrait) {
                
            }
        </style> 
        <section>

        </section>        
        `;
    }
}