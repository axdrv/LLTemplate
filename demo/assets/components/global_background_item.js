export class GlobalBackgroundItem extends HTMLElement {
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
        global-background-item {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;            
            bottom: 0;
            background: linear-gradient(180deg, #ee7752, #7D2767,  #5802BB, #210549);
            z-index: -10;
        }
        </style> 
        `;                 
    }
}