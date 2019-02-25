console.log('%c ☾☾☾ Seize the Night ☾☾☾ ', 'background: lavenderblush; border: 1px solid #fff');

$(document).ready(function () {

  // FLICKITY CAROUSEL
  $('.pics-carousel').flickity({
    wrapAround: true,
    autoPlay: 6000,
    lazyLoad: 1,
    accessibility: true,
    pageDots: false,
    prevNextButtons: false
  });
});