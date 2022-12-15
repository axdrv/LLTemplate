//components file defines components that around whole document
import { GlobalBgnd } from '/assets/layout/global_background_item.js';
customElements.define('global-background-item', GlobalBgnd);
import { HeaderItem } from '/assets/layout/header/header_item.js';
customElements.define('header-item', HeaderItem);
import { FooterItem } from '/assets/layout/footer_item.js';
customElements.define('footer-item', FooterItem);
export {GlobalBgnd, HeaderItem, FooterItem}