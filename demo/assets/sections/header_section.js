export class HeaderSection extends HTMLElement {
    constructor () {
        super();
    }
    connectedCallback() {
        this.render(); //
    }
    static get observedAttributes() {
        return [];
    }
    attributeChangedCallback(attr, prev, next) {
        if(prev !== next) {
          this[`_${attr}`] = next;
          this.render();
        }
    }
    render() {
        this.innerHTML = `
        <style>
         
        </style>
        <header>
        </header>        
        `;        
    }
}