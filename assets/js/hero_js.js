
// section animation
var myFullpage = new fullpage('#fullpage', {
    menu: '#menu_main',
    anchors: ['home', 'about', 'skill', 'education', 'work', 'contact'],
    scrollingSpeed: 1000,
});

// ==================================

var tl = gsap.timeline();


// tl.from('.nav-link', {
//     stagger: .3,
//     duration: 2,
//     y: 30,
//     opacity: 0
// })
// tl.from('.leftitem', {
//     stagger: .3,
//     duration: 1.5,
//     y: 20,
//     scrollTrigger: {
//         scrub: 1,
//         trigger: ".aboutPage",
//         start: "top 0%",
//         ease: 'Expo.easeInOut',
//       },
//     opacity: 0
// })


// tl.from('.my_img', {
//     duration: 2,
//     scale: 1.05,
//     scrollTrigger: {
//         scrub: 1,
//         trigger: ".my_img",
//         start: "top 50%",
//         ease: 'Expo.easeInOut',
//         markers:true
//       },
//     opacity: 0
// })