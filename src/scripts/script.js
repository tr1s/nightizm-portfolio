console.log('%c ☾☾☾ Seize the Night ☾☾☾ ', 'background: lavenderblush; border: 1px solid #fff');

$(document).ready(function () {
  $('.pics-carousel').flickity({
    wrapAround: true,
    autoPlay: 6000,
    lazyLoad: 1,
    accessibility: true,
    pageDots: false,
    prevNextButtons: false
  });

  // LOOPING MOON IN ADDRESS BAR
  // var f = ['🌑', '🌒', '🌓', '🌔', '🌝', '🌖', '🌗', '🌘'];
  // function loop() {
  //     location.hash = f[Math.floor((Date.now()/100)%f.length)];
  //     setTimeout(loop, 50);
  // }
  // loop();
}); // add custom js below