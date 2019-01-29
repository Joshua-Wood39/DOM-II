// Your code goes here

// Declarations
let navAnchors = document.getElementsByClassName('nav-link');
let hTwo = document.querySelectorAll('h2');
let hFour = document.querySelectorAll('.destination');

// Events
navAnchors[0].addEventListener('click', e=> {
        console.log(e.currentTarget);
        e.currentTarget.textContent = 'HomeBase';
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
        TweenMax.to(e.currentTarget, 3, {
            rotationY: 360,
        });
    });
}