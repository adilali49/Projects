const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

gsap.from('.home a',{
    ease: 'power1.out',
    stagger: .2,
    delay: 1,
    duration: 1,
    y: 10,
    opacity: 0,
})