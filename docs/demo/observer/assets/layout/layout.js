//components file defines components that around whole document
import { GlobalBackgroundItem as globalBgnd } from '/assets/layout/global_background_item.js';
customElements.define('global-background-item', globalBgnd);
import { HeaderItem } from '/assets/layout/header_item.js';
customElements.define('header-item', HeaderItem);
import { FooterItem } from '/assets/layout/footer_item.js';
customElements.define('footer-item', FooterItem);
export {globalBgnd, HeaderItem, FooterItem}