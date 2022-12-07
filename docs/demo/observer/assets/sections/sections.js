// Adding sections into <main> in order defined in this file 

let sections = [];
//////////////////////////////
import { IntroSection } from '/assets/sections/intro_section.js';
customElements.define('intro-section', IntroSection);
sections.push(document.createElement('intro-section'));
//////////////////////////
import { AboutSection } from '/assets/sections/about_section.js';
customElements.define('about-section', AboutSection);
sections.push(document.createElement('about-section'));
///////////////////////////////
import { CustomSection } from '/assets/sections/custom_section.js';
customElements.define('custom-section', CustomSection);
sections.push(document.createElement('custom-section'));
///////////////////////////
import { FAQSection } from '/assets/sections/faq_section.js';
customElements.define('faq-section', FAQSection);
sections.push(document.createElement('faq-section'));
////////////////////////////
import { ContactSection } from '/assets/sections/contact_section.js';
customElements.define('contact-section', ContactSection);
sections.push(document.createElement('contact-section'));

export {sections};
//then import sections array at 'main.js'