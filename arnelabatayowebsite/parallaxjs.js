let controller = new ScrollMagic.Controller();
let timeline  = new TimelineMax();

timeline
.to('.bgfirstintro', 3, {top: 100})
.to('.spacebgintro', 3, {margin: '-200 0 0 0'}, '-=3')

let scene = new ScrollMagic.Scene({
    triggerElement: 'section',
    duration: "100%",
    triggerHook: 0,
})
.setTween(timeline)
.addTo(controller)