export class ContactCard extends HTMLElement {
    constructor () { //this is template only
        super();        
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
            contact-card {
                width: 45%;
                min-width: 270px;
                height: 200px;
                margin: 32px 0;
                border-top-left-radius: 24px;
                border-top-right-radius: 20px;
                border-bottom-left-radius: 20px;
                box-shadow: -2px 3px 11px -5px var(--custom-section);
            }
            .contact-card-header {
                height: 60px;
                border-bottom: 2px solid var(--custom-section);
                display: flex;
                align-items: flex-end;
                justify-content: space-between;
                padding: 4px 16px 2px 8px;
            }               
            .contact-card-header .cardImg{
                align-self: center;
            }
            .contact-card-content {
                height: 120px;
                padding: 4px 16px 2px 8px;
                display: flex;
                align-items: flex-end;
            }
            .contact-card-content>* {
                margin: 8px;
            } 
            .card-content_share-and-link {
                width: 100%;
                display: flex;
                flex-flow: row;
                justify-content: flex-end;
                align-items: flex-end;
            } 
            .card-content_share-and-link_description {
                padding-right: 32px;
            }  
            .card-content_share-and-link_buttons {
               display: flex;
            }         
            .ya-share2__link, .ya-share2__link_more, .ya-share2__link_more-button-type_short {
                width: 24px;
                height: 24px;
                margin: 0;
                padding: 0;
                line-height: 0;                
                font-size: 0;
                background-position: center;
                background-repeat: no-repeat;
                display: inline;
            }           
            .ya-share2__item_more.ya-share2__item_has-pretty-view .ya-share2__icon_more {                        
            background-image: url('/assets/styles/icons/share_icon.svg');
            } 
            .ya-share2__container_size_m .ya-share2__item_more.ya-share2__item_has-pretty-view .ya-share2__link_more.ya-share2__link_more-button-type_short {
                width: 24px;
                height: 24px;
                margin: 0;
                padding: 0;
                line-height: 0;                
                font-size: 0;
                background: transparent;
            }
            .ya-share2__container_size_m .ya-share2__item_copy .ya-share2__icon_copy, .ya-share2__container_size_m .ya-share2__item_more .ya-share2__icon_more {             
                background-size: 18px;
            }
            .ya-share2-link
            @media (max-width: 1199.98px) {                
            }
            @media (max-width: 991.98px) {                
            }
            @media (max-width: 767.98px),
            (orientation: portrait) {
                contact-card {
                    width: 85%;
                }
            }
            @media (max-width: 575.98px) {                
            }
        </style> 
        <div class="contact-card">
            <div class="contact-card-header">
                <h4></h4>
                <div class="cardImg icon-xl"></div>
            </div>
            <div class="contact-card-content">
                    
            </div>
        </div>      
        `;
    }
}