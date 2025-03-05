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

gsap.from('.sustain, .ephemeral, .visit',{
    y: 50,
    stagger: .2,
    opacity: 0,
    duration: 2,
    ease: 'expo.out',
})

Shery.imageEffect(".image-ephemeral-and-text img",{
    style: 3,
    config: {"uFrequencyX":{"value":16.03,"range":[0,100]},"uFrequencyY":{"value":11.45,"range":[0,100]},"uFrequencyZ":{"value":24.43,"range":[0,100]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500136395875389},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0.02,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0.1,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.24,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
})