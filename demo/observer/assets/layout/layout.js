//components file defines components that around whole document
//import { HeaderItem } from '/assets/layout/header/header_item.js';
import { FooterItem } from '/assets/layout//footer/footer_item.js';
import { BackgroundItem } from '/assets/layout/bgnd/background_item.js';
customElements.define('background-item', BackgroundItem);
//customElements.define('header-item', HeaderItem)
customElements.define('footer-item', FooterItem)

export function initLayout(main) {
    main.before(document.createElement('background-item'));
    main.after(document.createElement('footer-item'))
}

