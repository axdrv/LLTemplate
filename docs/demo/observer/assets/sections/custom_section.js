export class CustomSection extends HTMLElement {
    constructor () {
        super();
        this.header = "Свобода действий";        
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
            custom-section {
                overflow: hidden;
            }
            .custom-section {
                height: 100%;
                justify-content: space-evenly;
                  
            }           
            .custom-section-any {
                position: relative;
            }
            .custom-section-any h4 {
                padding:0 36px;
            }
            .changeStyles {
                text-align: right;
            }
            .addNodes:after, .changeStyles:after, .variateFree:after {
                position: absolute;
                content: '';
                z-index: -1;
            }
            .addNodes:after {                
                top: -68px;
                right: 10%;
                transform: rotateZ(80deg);
                width: 280px;
                height: 280px;
                background: var(--intro-section);
            }            
            .changeStyles:after {
                width:0;
                height:0;
                top: -50px;
                left: 10%;
                border-bottom: 260px solid var(--faq-section);
                border-left: 130px solid transparent;
                border-right: 130px solid transparent;
                border-top:0;
                transform: rotateZ(45deg);                
            } 
            .variateFree:after {
                width:250px;
                height:250px;
                top: -48px;
                left: 40%;
                border-radius: 50%;
                background: var(--contact-section);
            }               
        </style> 
        <section class="custom-section f-column">
            <div class="custom-section-any addNodes">
                <h2>Произвольно добавляем любые:</h2>
                <h4>Компоненты</h4>
                <h4>Модули</h4>
                <h4>Библиотеки</h4>
            </div>
            <div class="custom-section-any changeStyles">
                <h2>По желанию меняем стили:</h2>
                <h4>в компоненте</h4>
                <h4>внутри блока</h4>
                <h4>во всём документе</h4>
            </div>
            <div class="custom-section-any variateFree">                
                <h2>Эксперементируем без ограничений:</h2>
                <h4>с макетом,</h4>
                <h4>с дизайном,</h4>
                <h4>с поведением</h4>
            </div>          
        </section>
        `;
    }
}