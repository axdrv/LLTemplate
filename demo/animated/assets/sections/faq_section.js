export class FAQSection extends HTMLElement {
    constructor () {
        super();
        this.header = "Частые вопросы"; 
        this.focused = '';
        this.bgnd = '#113cab';
               
    }
    connectedCallback() {  
        this.render();
    } 
    static get observedAttributes() {
        return ['focused']; 
    } 
    attributeChangedCallback(attr, prev, next) {
        if(prev !== next) {
          this[`${attr}`] = next;
          this.update();
       }
    }
    update() {}
    clickSniffer(target) {
        if(!target.closest('.question-header'))return;
        let h, rotateValue;
        let parent = target.closest('.question');
        parent.classList.toggle('active');
        let symbol = parent.querySelector('span');
        let content = parent.querySelector('.question-content');
        if (parent.classList.contains('active')){
            h=content.getAttribute('data-height');
            rotateValue = '-45deg';
        } else {
            h = rotateValue = 0;
        }
        anime({
            targets: content,
            height: h,
            easing: 'easeOutQuad',
            duration: 200
        })
        anime({
            targets: symbol,
            rotate: rotateValue
        })
    }
    render() {
        
        this.innerHTML = `
        <style>
        .question-header {
            max-width: 768px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 4px 24px 4px 12px;
            border-bottom: 1px solid var(--l-links);
            cursor: pointer;
        }
        .question-header h3     {
            padding-right: 24px;
        }
        .question-header .plus {
            font-size: 3rem;
        }
        .question-content {
            overflow: hidden;
        }
        </style> 
        <section class="faq-section">
            <div class="question">
                <div class="question-header">
                    <h3>Какие инструменты нужны для работы?</h3>
                    <span class="plus">+</span>
                </div>
                <div class="question-content">
                    <p>Редактор кода + браузер. Разработчиком используется свободная версия VSCode от Microsoft, с настроенным окружением для работы с применяемыми технологиями.</p>
                </div>
                
            </div>
            <div class="question">
                <div class="question-header">
                    <h3>Что со стилями?</h3>
                    <span class="plus">+</span>
                </div>
                <div class="question-content">
                    <p>Обычный CSS3. Предустановленные стили легко изменить в основном файле стилей 'main.css'. Так, основные цвета определены  в :root, и их имена интуитивно понятны. Если по замыслу проекта понадобятся собственные глобальные стили, их можно, как в этой версии, импортировать из файла /assets/styles/css/project.css.  Браузер даёт возможность импортировать локальные стили прямо в элемент. Так, в этом примере общая структура шапки сайта вынесена в отдельную папку и стиль импортирован прямо в основной элемент. В дополнение, чтобы избежать перекрёстных стилей, потомкам лучше назначать классы связанные с именем корневого пользовательского элемента, в котором переопределяется стиль. Так, при необходимости тег &lt;h2&gt; в пользовательском элементе &lt;intro-section&gt; можно обозначить intro-section h2 или присвоить ему класс h2.introSection</p>    
                </div>                
            </div>
            <div class="question">
                <div class="question-header">
                    <h3>Что с адаптивностью?</h3>
                    <span class="plus">+</span>
                </div>            
                <div class="question-content">
                    <p>По умолчанию, стили привязаны к четырём медиазапросам:
                        <ul>
                            <li>@media (max-width: 1199.98px); </li>
                            <li>@media (max-width: 991.98px);</li>
                            <li>@media (max-width: 767.98px),(orientation: portrait); и</li>
                            <li>@media (max-width: 575.98px)</li>
                        </ul>
                    В основном файле шаблона минимум стилей, всё для свободы творчества. Впрочем, любые библиотеки всегда можно подключить с помощью @import. Так, в эту демо-версию и в пустой шаблон из папки '/assets/styles/css' подключена библотека normalize.css </p>   
                </div>               
            </div>
            <div class="question">
                <div class="question-header">
                    <h3>Что с реактивностью?</h3>
                    <span class="plus">+</span>
                </div>
                <div class="question-content">
                    <p>Шаблон это не фреймворк. Под задачи шаблона подобрана файловая структура и определён минимальный набор правил. Всё остальное на предпочтение разработчиков. Реактивность в этой демо версии реализована через технологию <a href="https://developer.mozilla.org/ru/docs/Web/API/MutationObserver" target="_blank">Mutation Observer</a></p>
                </div>                
            </div>            
            <div class="question">
                <div class="question-header">
                    <h3>Плюсы и минусы</h3>
                    <span class="plus">+</span>
                </div>
                <div class="question-content">
                    <h4>Плюсы</h4>
                    <ul>
                        <li>Изначально разработан, как завершённый этап всей рутинной работы в реализации проекта одностраничника. Дальше творчество.</li>
                        <li>Изначально встроена возможность отстраниться от использования тяжелых инструментов веб разработчика, которые требуют дополнительных ресурсов на изучение их функционала, и их языков архитектуры;</li>
                        <li>Модульный подход используемых  технологий даёт возможность разработки модулей отдельно от основного проекта и их встраивания в общую структуру по готовности.</li>
                        <li>В репозитории присутствует набор готовых типовых решений, по принципу "наполняй и пользуйся"(в разработке)</li>
                        <li>В репозитории присутствует собственная библиотека компонентов и модулей, всегда готовых встроиться в структуру проекта(в разработке)</li>
                    </ul>
                    <h4>Минусы</h4>
                    <ul>
                        <li>Надо знать и обновлять знания в используемых технологиях HTML+CSS+JS+Web Components.</li>
                        <li>Позже вылезут</li>
                        <li>Позже ещё вылезут</li>
                    </ul>
                </div>  
            </div>
        </section>
        `;
        this.querySelectorAll('.question').forEach((elt)=> {
            let content = elt.querySelector('.question-content');
            let h = content.offsetHeight;
            content.setAttribute('data-height', h)
            content.style.height=0;
        })
        this.setAttribute('clicklistener', '');
    }
}