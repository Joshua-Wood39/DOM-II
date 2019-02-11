// Your code goes here

// Declarations
let navAnchors = document.getElementsByClassName('nav-link');
let hTwo = document.querySelectorAll('h2');
let hFour = document.querySelectorAll('.destination');
let logoHead = document.querySelector('.logo-heading');

// Events
navAnchors[0].addEventListener('click', e=> {
        console.log(e.currentTarget);
        e.currentTarget.textContent = 'HomeBase';
        e.preventDefault();
});

navAnchors[1].addEventListener('wheel', e=> {
        console.log(e.currentTarget);
        e.currentTarget.style.color = 'red';
});

navAnchors[2].addEventListener('dblclick', e=> {
        console.log(e.currentTarget);
        e.currentTarget.style['font-size'] = '40px';
})

navAnchors[3].addEventListener('focus', e=> {
        console.log(e.currentTarget);
        e.target.style['background-color'] = 'teal';
}, true);

navAnchors[3].addEventListener('blur', e=> {
        e.target.style['background-color'] = '';
}, true);

for (let i = 0; i < hTwo.length; i++) {
    hTwo[i].addEventListener('mouseover', e=> {
        TweenMax.to(e.currentTarget, 1, {
            x: 150,
            ease:Bounce.easeOut
         });
    });
}

for(let i = 0; i < hFour.length; i++) {
    hFour[i].addEventListener('mouseout', e=> {
        console.log(e.currentTarget);
        e.stopPropagation();
        TweenMax.to(e.currentTarget, 3, {
            rotationY: 360,
        });
    });
}

window.addEventListener('load', e=> {
    console.log("loaded");
    TweenMax.to(logoHead, 6, {
        x: 100,
        'font-size': '100px',
        'color': 'yellow'
    });
});

for(let i = 0; i < hFour.length; i++) {
    hFour[i].addEventListener('auxclick', e=> {
        console.log(e.currentTarget);
        TweenMax.to(e.currentTarget, 4, {
            'color': 'purple'
        });
    });
}

for(let i = 0; i < hFour.length; i++) {
    hFour[i].addEventListener('drag', e=> {
        console.log(e.currentTarget);
        TweenMax.to(e.currentTarget, 1, {
            'color': 'black'
        });
    });
}
