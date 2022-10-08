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
            header {                   
                box-sizing: border-box;
                min-height: 70px;
            }            
            nav {
                display: flex;
                flex-flow: row wrap;
                justify-content: center;
                margin: 4px 12px;
            }
            nav a {
                text-decoration: none;
                white-space: nowrap;
                padding: 4px 8px;
                font-size: 15px;
                font-weight: 500;
            }            
            
            @media (max-width: 1199.98px) {
            }
            @media (max-width: 991.98px) {
                
            }
            @media (max-width: 767.98px),
            (orientation: portrait) {
                nav {
                    display: none;
                }                              
            }           
        </style>
        <header>
            I am a header
        </header>        
        `;        
    }
}