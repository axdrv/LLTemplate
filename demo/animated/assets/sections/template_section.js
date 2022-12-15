export class ChangeNameAround extends HTMLElement {
    constructor () { //this is template only
        super();
        this.rendered = false;
        this.header = '';             
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
            if (this.rendered) {
                this.update(attr, prev, next);
            }
        }        
    }
    update (attr, prev, next) {       
        let hasAttr = this.querySelectorAll('['+attr+']');
        hasAttr.forEach((elt) => {
            elt.setAttribute(attr, next)
        })
    }
    render() {
        this.innerHTML = `
        <style>

        </style> 
        <section>

        </section>        
        `;
        this.rendered = true;
        //this.update();
    }
}