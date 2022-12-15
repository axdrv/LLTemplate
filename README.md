# Шаблон для создания лендингов/Light Landing Template
 Основан на стандартах/Pure **HTML + CSS + JS** template

Простой шаблон без применения дополнительных технологий, кроме самых необходимых. Расширяется в любую технологию по желанию разработчика. По сути, чуть развёрнутей Emmet `! + Tab`.
- Pure and light template for programmers, who has knowlege about HTML+CSS+JS. Component approach based on Web Components standart.
- Глобальные стили в коротком файле main.css. Пользовательские стили определяются <b>`@import`</b> Локальные стили прописываются в компонентах, с добавлением классов сходно с методологией БЭМ.
- main.css file in the core is my best to keep light, well commented and ready for adaptiveness without any libs, compillers.
Good luck. 

- Пример версии 1.0.0/Demo is [здесь/here](https://lltemplate.vercel.app/).

###Версия 1.1.0 Что нового?

- render()  в компонентах вызывается один раз в функции connectedCallback. Последующие изменения происходят через attributeChangedCallback;
- attributeChangedCallback не вызывается до рендеринга. Так, не происходит ошибок при обращении и попытках изменить атрибуты несуществующих (неопределённых) элементов;
- Mutation Observer удалён из `main.js`  Реактивность от старших к вложенным обеспечивается через attributeChangedCallback в компонентах следующим кодом: `let hasAttr = this.querySelectorAll('['+attr+']');hasAttr.forEach((elt) => {elt.setAttribute(attr, next)})`. Компоненты в этом случае снабжаются одноимённым атрибутом;
- Событие Click перехватывается от вложенных к старшим методом closest('[clicklistener]') в функции `clickHandler` в `main.js`. Все элементы, которые должны прослушивать событие снабжаются атрибутом `clicklistener`, и обрабатывают событие функцией колбеком `clickSniffer()`, определённым в элементе.
На данный момент ошибок в таком подходе не возникает, в комментариях стоит пометка "Отслеживать";
- Компоненты реорганизованы в папках. Стили компонента и его эксклюзивных потомков, дополнительные функции, и даже принадлежащие только компоненту медиафайлы теперь находятся в одной папке с компонентом. 

* Примеры [здесь](https://lltemplate.vercel.app/), и [здесь(с подключением библиотеки animejs)](https://ll-template.vercel.app
/) 

