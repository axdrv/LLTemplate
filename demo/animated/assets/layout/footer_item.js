export class FooterItem extends HTMLElement {
    connectedCallback() { 
        this.render(); 
    } 
    render() {        
        this.innerHTML = `
            <style>
                footer-item {                    
                    width: 100%;
                    background: var(--d-base);
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
                <a class="aFooter" href="https://github.com/axdrv/LLTemplate">Скачать базовый шаблон</a>
                <a class="aFooter" href="https://lltemplate.vercel.app/">Смотреть образец без анимации</a>
                <a class="aFooter" href="https://github.com/axdrv/LLTemplate">Загрузить этот шаблон</a>
            </footer>
        `;        
    }        
}