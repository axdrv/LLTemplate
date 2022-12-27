export class IntroSection extends HTMLElement {
    constructor () {
        super();
        this.intro = "Light Landing Template";        
    }
    connectedCallback() {  
        this.render();
    } 
    static get observedAttributes() {
        return []; 
    } 
    attributeChangedCallback(attr, prev, next) {
        if(prev !== next) {
          this.update();
       }
    }
    render() {
        this.innerHTML =  `<style>intro-section h1 {font-size: 4rem;background-image: linear-gradient(135deg, #3046AB, #9AE4C9, #24428A, #3046AB, #9AE4C9, #24428A, #3046AB, #9AE4C9, #24428A);color: transparent;-webkit-background-clip: text;background-clip: text;}</style><h1 style="text-align: center;">${this.intro}</h1>`;               
    }
    update() {

    }
}