import {flake2} from '/assets/layout/bgnd/flake2.js';
export class BackgroundItem extends HTMLElement {
    constructor () {
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
        background-item {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;            
            bottom: 0;
            background: url('assets/layout/bgnd/bgnd.jpg') 0 0 / cover, no-repeat;
            z-index: -10;
            overflow: hidden;
        }
        .flake {
            top: 10%;
        }
        .flake {
            position: absolute;
            width: 13px;
            height: 13px;
            fill: #B0E0E6;
        }
      
        .bit {
            position: absolute;
            width: 2px;
            height: 4px;
            background: deepskyblue;
        }
        </style>
        `;        
        for (let i=0; i<8; i++) {
            let x = Math.floor((Math.random() * 100) - 50);
            let y = Math.floor((Math.random() * 30));
            let rd = Math.random()*14877;
            let flake = document.createElement('svg');
            flake.classList.add('flake');
            flake.classList.add('flake'+i);
            flake.style.left = (2+ i*14)+'%';
            flake.innerHTML = flake2;
            this.appendChild(flake);
            anime({
                targets: '.flake'+i, 
                opacity: [{ value: [0,1], duration: 900, delay: rd},
                            { value: 0, duration: 900, delay: +12200}],           
                top: ['10%', '90%'],            
                translateX: [{value: x, duration: 4000, easing :            'easeInOutQuad'},
                            {value: -x, duration: 4000, easing : 'easeInOutQuad'}
                            ],
                rotateX: {
                    value:'-0.12turn',
                    duration: 0,
                    direction: 'forwards',
                },
                rotateY: [ {value: '-0.05turn', duration: y*40, delay: 3000},
                        {value: '0.05turn', duration: y*60},
                        {value: '0', duration: 2000},
                        ],
                rotateZ: '4turn',
                duration: 14000,
                loop: true,
                easing: 'linear',
                delay: rd

            })
        }
        function bit(t) {
            let y = Math.floor(((Math.random() * 65)+10))+ '%';
            let x = Math.floor((Math.random() * 100) )+ '%';
            let bit = document.createElement('span');
            bit.classList.add('bit');
            bit.style.top = y;
            bit.style.left = x;
            t.appendChild(bit);
            anime({
                targets: bit,
                rotateY: ['-90deg', '90deg'],
                translateY: '+=6px',
                duration: 600, 
                easing: 'easeInOutQuad',
                complete: function() {
                    bit.remove();
                }               
            })
        }
        let insertBits = setInterval(()=> {bit(this)}, 20)
    } 
}