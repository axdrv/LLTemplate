export class FooterSection extends HTMLElement {
    connectedCallback() { 
        this.render(); 
    } 
    render() {        
        this.innerHTML = `
            <style>
                footer {
                } 
                @media (max-width: 1199.98px) {
    
                }
                @media (max-width: 991.98px) {
               
                }
                @media (max-width: 767.98px),
                (orientation: portrait) {
                    .footer-content { 
                        flex-flow: column;                       
                        font-size: 10px;
                    }
                    .footer-content-trademark {
                        white-space: normal;
                        text-align: left;
                    }   
                }
            </style>
            <footer>
               I am a footer  
            </footer>
        `;        
    }        
}