var tl = gsap.timeline();


tl.from('.nav-link', {
    stagger: .3,
    duration: 2,
    y: 20,
    delay: 7,
    ease: 'Expo.easeInOut',
    opacity: 0
})