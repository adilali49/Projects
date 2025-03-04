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

Shery.textAnimate(".home > .hero .headings h1", {
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 1.5,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });