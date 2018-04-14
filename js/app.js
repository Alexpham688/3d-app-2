$(function() {


  TweenMax.from('.a', 4, {
    y: -500,
    opacity: 0,
    ease: SteppedEase.easeInOut
  });
  TweenMax.from('.d',4, {
    y: -250,
    opacity: .5,
    ease: Back.easeInOut
  });
  TweenMax.from('.b', 3, {
    y: 300,
    opacity: 0,
    ease: Sine.easeInOut
  });
  TweenMax.from('.c', 5, {
    y: 100,
    opacity: 0,
    ease: Expo.easeOut
  });
  TweenMax.from('.e', 4, {
    x: -300,
    opacity: 0,
    ease: Power1.easeInOut
  });
  TweenMax.from('.f', 3, {
    y: 500,
    opacity: 0,
    ease: RoughEase.easeOut
  });
  TweenMax.from('.g', 2, {
    y: 340,
    opacity: 0,
    ease: SteppedEase.easeInOut
  });
  TweenMax.from('.i', 6, {
    y: 400,
    opacity: 0,
    ease: Bounce.easeOut
  });
  TweenMax.from('.h', 4, {
      y: -300,
      opacity: 0,
      ease: RoughEase.easeOut
  });
  TweenMax.from('.j', 4, {
    x: 500,
    opacity: 0,
    ease: Expo.easeOut
  });

});
