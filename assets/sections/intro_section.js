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
            
        </style>
        <section class="intro">
            <h1>I am h1</h1>
            <h2>I am h2</h2>
            <h3>I am h3</h3>
            <h4>I am h4</h4>
            <h5>I am h5</h5>
            <h6>I am h6</h6>
            <p>I am simple text</p>
        </section> 
        `;
    }
}