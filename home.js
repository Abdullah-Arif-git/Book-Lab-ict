const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
Shery.imageEffect(".images", {

  style: 5,
   debug:true,
  config:{"a":{"value":2,"range":[0,30]},"b":{"value":-1,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6168770695364238},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":0.62,"range":[0.1,5]},"durationIn":{"value":0.51,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0,"range":[0,10]},"metaball":{"value":0.21,"range":[0,2],"_gsap":{"id":5}},"discard_threshold":{"value":0.4,"range":[0,1]},"antialias_threshold":{"value":0.02,"range":[0,0.1]},"noise_height":{"value":0.17,"range":[0,2]},"noise_scale":{"value":17.56,"range":[0,100]}},                                                                                                                
  gooey: true,
  
});


  Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.makeMagnet(".magnet" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
    
  });

gsap.from("#page1 h1",{
    y:100,
    opacity:0,
    duration:0.9,
    stagger:0.3,
})
gsap.from("#page1 #image",{
    scale:0.9,
    opacity:0,
    delay:1.3,
    duration:0.5,
})
