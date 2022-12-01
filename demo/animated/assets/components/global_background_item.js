export class GlobalBackgroundItem extends HTMLElement {
    constructor () {
        super(); 
        this.onscene = '';
        this.prev = '';

    }
    connectedCallback() {  
        this.render();
    } 
    static get observedAttributes() {
        return ['onscene']; 
    } 
    attributeChangedCallback(attr, prev, next) {
        if(prev !== next) {
            this[`${attr}`]='var(--'+next.toLowerCase()+')';
            this.render();
       }
    }
    
    render() {
        this.innerHTML = `
        <style>
        global-background-item {
            position: fixed;
            height: 100vh;
            left: 0;
            right: 0;
            top: 0;            
            bottom: 0;
            background: linear-gradient(135deg,  ${this.onscene}, var(--d-base));
            z-index: -10;
        }
        </style> 
        `;
    }
}