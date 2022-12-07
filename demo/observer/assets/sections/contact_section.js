import {copylink} from '/assets/components/copylink.js';
import { ContactCard } from '/assets/components/contact_card.js';
customElements.define('contact-card', ContactCard);

export class ContactSection extends HTMLElement {
    constructor () {
        super();
        this.header = "Контакты";
        this.cards = [
            {
                header: 'Страница проекта',
                content: '<div class="card-content_share-and-link"><a class="card-content_share-and-link_description"></a><div class="card-content_share-and-link_buttons"><div class="ya-share2" data-copy="hidden" data-curtain data-color-scheme="blackwhite" data-limit="0" data-more-button-type="short" data-popup-direction="auto" data-services="telegram,messenger,moimir,whatsapp"></div><div class="copyLink"></div></div></div>',
                iconUrl: 'url("/assets/styles/icons/github_icon_eyes.svg")',
                url: 'https://'
            },
            {
                header: 'Обсуждения',
                content: '<div class="card-content_share-and-link"><a class="card-content_share-and-link_description"></a><div class="card-content_share-and-link_buttons"><div class="ya-share2" data-copy="hidden" data-curtain data-color-scheme="blackwhite" data-limit="0" data-more-button-type="short" data-popup-direction="auto" data-services="telegram,messenger,moimir,whatsapp"></div><div class="copyLink"></div></div></div>',
                iconUrl: 'url("/assets/styles/icons/vk_2colors_icon.svg")',
                url: 'https://'
            },
            {
                header: 'Ссылка на эту страницу',
                content: '<div class="card-content_share-and-link"><a class="card-content_share-and-link_description"></a><div class="card-content_share-and-link_buttons"><div class="ya-share2" data-copy="hidden" data-curtain data-color-scheme="blackwhite" data-limit="0" data-more-button-type="short" data-popup-direction="auto" data-services="telegram,messenger,moimir,whatsapp"></div><div class="copyLink"></div></div></div>',
                url: 'https://'
            },
            {
                header: 'Проекты на LLTemplate',
                content: '<p>LLTemplate открыт для предложений. Первому проекту скидка 10% и закрепление ссылки в этом окошке на год!</p>',
                iconUrl: 'url("/assets/styles/icons/LLT.svg")',
                url: 'https://'
            }
        ];         
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
            .cards-section {
            }
            .cards-section {
                display: flex;
                flex-flow: row wrap;
                justify-content: space-evenly;
                align-items: space-evenly;
            }
        </style>
        <a name="Контакты"></a>
        <section>
            <div class="cards-section"></div>            
            
        </section>
        `;
        let cardsSection = this.querySelector('.cards-section');
        for (let cardData of this.cards) {
            let card = document.createElement('contact-card');          
            cardsSection.appendChild(card);
            let chh4 = card.querySelector('.contact-card-header h4');                           
            chh4.innerText=cardData.header;
            let chImg = card.querySelector('.contact-card-header .cardImg');
            chImg.style.backgroundImage = cardData.iconUrl;
            let content = card.querySelector('.contact-card-content'); 
            content.innerHTML=cardData.content;
            let linkdesc = card.querySelector('.card-content_share-and-link_description');
            linkdesc?linkdesc.innerText = cardData.url:false;
            let clink = card.querySelector('.copyLink');
            clink?copylink(clink, 'icon-m', cardData.url):false;
            let shLink = card.querySelector('.ya-share2');
            shLink?shLink.setAttribute('data-url', cardData.url):false;
        }
    }
}