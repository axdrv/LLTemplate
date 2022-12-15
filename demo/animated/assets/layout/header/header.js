export function animateUpDownChange (elt, prev, next, scrollDir, bgnd) {
    let dist = prev==''?0:scrollDir=='up'?20:-20;
    anime({
        targets: elt.closest('header-item'),
        backgroundColor: bgnd       
    })
    let anim = anime.timeline({                
        targets: elt,
    })
    anim.add({
        translateY: dist,
        opacity: 0.1,
        easing: 'easeOutBack',
        duration: 150
    }).add({
        translateY: -dist,
        duration: 10
    }).add({
        update: function() {            
                elt.innerHTML!=next?elt.innerHTML=next:false;
        },        
        opacity: 1,        
        translateY: 0,
        easing: 'easeOutCirc',
        duration: 600
    })
}; 
export function toggleBurger (burger, next) {
    //notice, 'open' is for header. When next=='open', visual state headerBurger looks close and vice versa 
    if (next=='focused') {
        burger.querySelector('.active').classList.remove('active');
        anime({                
           targets: burger.querySelectorAll('.burger_hidden'),
           translateX: 10,
           opacity: 0,
           easing: 'easeOutExpo',
           duration: 400
        })
        anime({                
            targets: burger.querySelector('.burger_upper'),
            rotate: 45,
            easing: 'easeOutExpo',
            duration: 300                       
         }) 
         anime({
            targets: burger.querySelector('.burger_lower'),
            translateY: -7,
            rotate: -45, 
            easing: 'easeOutExpo',
            duration: 300
         })    
    } else {        
        anime({
            targets: burger.querySelectorAll('.burger_hidden'),
            opacity: 1,
            translateX: 0,
            easing: 'easeOutQuad',
            duration: 400
        })
        anime({                
            targets: burger.querySelector('.burger_upper'),
            rotate: 0,
            translateY: 0,
            easing: 'easeOutExpo',
            duration: 300            
        }) 
        anime({
        targets: burger.querySelector('.burger_lower'),
        rotate: -0,
        translateY: 0,
        easing: 'easeOutExpo',
        duration: 300
        }) 
    }
}
export function animateHeader (nodes, next) {
    nodes.forEach((node, idx)=> {
        if(next=='focused') {
            anime({
                targets: node,
                top: 77+(55*idx)+'px',
                delay: 50*idx,
                easing: 'easeInOutBack',
                opacity: [0,1],
                duration: 600
            })            
        } else {
            anime({
                targets: node,
                top: '-56px',
                opacity: [1,0],
                delay: 50*idx,
                duration: 600,
                easing: 'easeInOutBack'
            })
        }
    }) 
}

