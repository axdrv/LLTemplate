export class FooterSection extends HTMLElement {
    connectedCallback() { 
        this.render(); 
    } 
    render() {        
        this.innerHTML = `
            <style>
                footer-section {                    
                    width: 100%;
                    background: var(--contact-section);
                }
                footer {
                    height: 77px;
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: space-between;
                    align-items: center;
                    color: var(--l-base);
                }
                footer a.aFooter {
                    font-weight: 600;
                    color: var(--l-links);
                    margin: 10px 24px;
                }
                @media (max-width: 1199.98px) {                
                }

                @media (max-width: 991.98px) {
                }

                @media (max-width: 767.98px),
                (orientation: portrait) {
                    footer {
                        height: auto;
                        flex-flow: column;
                    }                      
                }   
                
                @media (max-width: 575.98px) {
                }                
            </style>
            <footer>
                <a class="aFooter" href="">Скачать пустой шаблон</a>
                <a class="aFooter" href="">Смотреть анимированный шаблон</a>
                <a class="aFooter" href="">Скачать этот шаблон</a>
            </footer>
        `;        
    }        
}