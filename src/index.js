// require('offline-plugin/runtime').install();

import './index.html';
import './index.scss';

import './scripts/scramble.js';
import './scripts/flickity.min.js';
import './scripts/script.js';

function toggleDarkLight() {
  let body = document.getElementById("body");
  let currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}

$(document).ready(function() {
  $('.pics-carousel').flickity({
    wrapAround: true,
    autoPlay: 6000,
    lazyLoad: 1,
    accessibility: true,
    pageDots: false,
    prevNextButtons: false
  });

  // CKEAR INPUT ON SUBMIT
  $('.mailchimp-form').submit( function(e) {
    // e.preventDefault();
    // console.log('submitted');
    // this.reset();
  });

  // LOOPING MOON IN ADDRESS BAR
  var f = ['🌑', '🌒', '🌓', '🌔', '🌝', '🌖', '🌗', '🌘'];
  function loop() {
      location.hash = f[Math.floor((Date.now()/100)%f.length)];
      setTimeout(loop, 50);
  }

  loop();
});