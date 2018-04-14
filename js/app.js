$(function() {
  var carousel = $('.carousel');
  currentDeg = 0;

  $('.left').on('click', {d: 'l'}, rotate);
  $('.right').on('click', {d: 'r'}, rotate);

  function rotate(e) {
    if(e.data.d === 'l') {
      currentDeg = currentDeg - 40;
    }
    if(e.data.d === 'r') {
      currentDeg = currentDeg + 40;
    }
    carousel.css({
      'webkit-transform': 'rotateY(' + currentDeg + 'deg)',
         'moz-transform': 'rotateY('+ currentDeg + 'deg)',
             'transform': 'rotateY('+ currentDeg + 'deg)'
    });
  }

  // TweenMax.from('.a', 4, {
  //   y: -500,
  //   opacity: 0,
  //   ease: SteppedEase.easeInOut
  // });
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
    x: 400,
    opacity: 0,
    ease: Power1.easeOut
  });
  TweenMax.from('.h', 4, {
      y: 600,
      opacity: 0,
      ease: SteppedEase.easeOut
  });
  TweenMax.from('.a', 2, {
    y: 600,
    delay: 6,
    opacity: 0,
    ease: Bounce.easeOut
  });

});
