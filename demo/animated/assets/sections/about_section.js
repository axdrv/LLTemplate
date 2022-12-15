export class AboutSection extends HTMLElement {
    constructor () {
        super();
        this.header = "О Проекте";
        this.bgnd = '#277d6f';       
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
            .about-section {
                display: flex;
                flex-flow: column;
                justify-content: space-evenly;
                align-items: center;
            }
            .about-section p {
                font-size: 1.4rem;
                text-align: center;
                width: 80%;
                padding: 36px;
                border-radius: 12px;
                background: var(--contact-section);
            }
            @media (max-width: 1199.98px) {
                            
            }

            @media (max-width: 991.98px) {
                .about-section p {
                    font-size: 1.1rem;
                    text-align: left;
                    padding: 18px;
                }
            }

            @media (max-width: 767.98px),
            (orientation: portrait) {
                
            }
            @media (max-width: 575.98px) {
               
            }
        </style> 
        <section class="about-section">
            <p>Шаблон<b> LL_Template </b>задуман для создания одностраничников. Файловая структура организована в виде отдельных компонентов. Базовый шаблон имеет минимальный набор.</p>
            <p>Шаблон использует стек HTML + CSS + JS + WebComponents, поэтому для его использования необходимо знание этих стандартов.<br> 
            Pug, SCSS, LESS, Bootstrap, Jquery, npm, Vue, React, Angular, Grunt, Gulp, Webpack, ruby, python, и др. можно применять. Изначально в этом нет необходимости.</p>
            <p>Шаблон и в готовом виде остаётся шаблоном, обычная заготовка, которая не привязана ни к каким библиотекам, фреймворкам, препроцессорам. Чуть продвинутей EMMET '! + Tab'.</p>
            <p>Шаблон и комментарии к нему находятся в свободном доступе и доступны на Гитхаб по <a href="">ссылке</a>. Другая контактная информация и ссылки есть в блоке <a href="#Контакты">@Контакты</a>.</p>
        </section>
        `;
    }
}