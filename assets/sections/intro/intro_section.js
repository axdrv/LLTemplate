export class IntroSection extends HTMLElement {
    constructor () {
        super();
        this.intro = "Hello LLT";        
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
        <h1>${this.intro}</h1>
        `;       
    }
}