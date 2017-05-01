// main.js
$(document).ready(function() {
    'use strict';
    console.log('Load main JS for lassodesign');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtYWluLmpzXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgY29uc29sZS5sb2coJ0xvYWQgbWFpbiBKUyBmb3IgbGFzc29kZXNpZ24nKTtcbiAgICAvLyBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwieWVsbG93XCI7XG5cbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDEpIHtcbiAgICAgICAgICAkKCcjbWFzdGhlYWQnKS5hZGRDbGFzcyhcInN0aWNreVwiKTtcbiAgICAgICAgICAkKCdzZWN0aW9uLnNpdGUtYmFubmVyJykuYWRkQ2xhc3MoJ3N0aWNreScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQoJyNtYXN0aGVhZCcpLnJlbW92ZUNsYXNzKFwic3RpY2t5XCIpO1xuICAgICAgICAgICQoJ3NlY3Rpb24uc2l0ZS1iYW5uZXInKS5yZW1vdmVDbGFzcygnc3RpY2t5Jyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coJ2l0IHdvcmtzJyk7XG5cbiAgfSk7XG5cblxuLy8gbWFpbi5qc1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7IC8vIEZpeGluZyAndXNlIHN0cmljdCdcbiAgICAndXNlIHN0cmljdCc7XG4gICAgLy8gY29tcGFyaW5nIHdpdGggPT0gZ2VuZXJhdGVzIGEgd2FybmluZ1xuICAgIGlmICgndGVzdGluZycgPT09ICd0ZXN0aW5nJykge1xuICAgICAgY29uc29sZS5sb2coJCk7XG4gICAgfVxuICB9KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
