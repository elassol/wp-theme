// main.js
$(document).ready(function() {
    'use strict';
    console.log('main load');
    // document.body.style.backgroundColor = "yellow";

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
          $('#masthead').addClass("sticky");
          $('section.site-banner').addClass('sticky');
        } else {
          $('#masthead').removeClass("sticky");
          $('section.site-banner').removeClass('sticky');
        }
      });

    console.log('it works');

  });


// main.js
$(document).ready(function() { // Fixing 'use strict'
    'use strict';
    // comparing with == generates a warning
    if ('testing' === 'testing') {
      console.log($);
    }
  });
