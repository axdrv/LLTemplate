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
            header-section {
                position: fixed;
                top: 0;
                height: 127px;
                background: #dc143cdd;
                z-index: 1000;
            }
            @media (max-width: 1199.98px) {
                
            }

            @media (max-width: 991.98px) {
            }

            @media (max-width: 767.98px),
            (orientation: portrait) {
                header {
                height: 77px;
                
            }   
            }
            @media (max-width: 575.98px) {
            }
        </style>
        <header>
        </header>        
        `;        
    }
}