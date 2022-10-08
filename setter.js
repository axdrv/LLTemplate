// import { someItem } from '/assets/components/some_item.js';
// customElements.define('some-item', someItem);
// import layout and sections here;
import { HeaderSection } from '/assets/sections/header_section.js';
customElements.define('header-section', HeaderSection);
import { IntroSection } from '/assets/sections/intro_section.js';
customElements.define('intro-section', IntroSection);
import { HowToSection } from '/assets/sections/howto_section.js';
customElements.define('howto-section', HowToSection);
import { ContactSection } from '/assets/sections/contact_section.js';
customElements.define('cotact-section', ContactSection);
import { FooterSection } from '/assets/sections/footer_section.js';
customElements.define('footer-section', FooterSection);

// import some special elements and components here. Take care about import order to avoid error 'undefined' 
//import { SomeComponent } from '/assets/components/some_component.js';
//customElements.define('header-item', SomeComponent);