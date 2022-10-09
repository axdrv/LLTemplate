export class FooterSection extends HTMLElement {
    connectedCallback() { 
        this.render(); 
    } 
    render() {        
        this.innerHTML = `
            <style>                
            </style>
            <footer>
            </footer>
        `;        
    }        
}