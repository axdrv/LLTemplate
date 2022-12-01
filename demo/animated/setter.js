// import some special elements and components here. Take care about import order to avoid error 'undefined' 
//import { SomeItem } from '/assets/components/some_item.js';
//customElements.define('some-item', SomeItem);
import { GlobalBackgroundItem } from '/assets/components/global_background_item.js';
customElements.define('global-background-item', GlobalBackgroundItem);

// import { someSection } from '/assets/components/some_section.js';
// customElements.define('some-section', someSection);
// import layout and sections here;
import { HeaderSection } from '/assets/sections/header_section.js';
customElements.define('header-section', HeaderSection);
import { IntroSection } from '/assets/sections/intro_section.js';
customElements.define('intro-section', IntroSection);
import { AboutSection } from '/assets/sections/about_section.js';
customElements.define('about-section', AboutSection);
import { FAQSection } from '/assets/sections/faq_section.js';
customElements.define('faq-section', FAQSection);
import { CustomSection } from '/assets/sections/custom_section.js';
customElements.define('custom-section', CustomSection);
import { ContactSection } from '/assets/sections/contact_section.js';
customElements.define('contact-section', ContactSection);
import { FooterSection } from '/assets/sections/footer_section.js';
customElements.define('footer-section', FooterSection);

// next do something you like to operate with CustomElements. Hovewer another behaviour you may perform in main.js file when needed 