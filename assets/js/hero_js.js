
// section animation
var myFullpage = new fullpage('#fullpage', {
    menu: '#menu_main',
    anchors: ['home', 'about', 'service', 'work', 'contact'],
});

// ==================================

var tl = gsap.timeline();


tl.from('.nav-link', {
    stagger: .3,
    duration: 2,
    y: 30,
    delay: 0,
    ease: 'Expo.easeInOut',
    opacity: 0
}).from('.leftitem', {
    stagger: .3,
    duration: 1.5,
    y: 20,
    ease: 'Expo.easeInOut',
    opacity: 0
}, '<').from('.my_img', {
    duration: 2,
    scale: 1.05,
    ease: 'Expo.easeInOut',
    opacity: 0
}, '-=2')