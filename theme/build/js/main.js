// main.js
$(document).ready(function() {
    'use strict';
    console.log('main load');
    // document.body.style.backgroundColor = "yellow";

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
          // $('#masthead').addClass("sticky");
          $('section.site-banner').addClass('sticky');
        } else {
          // $('#masthead').removeClass("sticky");
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

// dos.js
console.log('dos');


// one.js
console.log('one');

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJ2ZW5kb3IvZG9zLmpzIiwidmVuZG9yL29uZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG1haW4uanNcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBjb25zb2xlLmxvZygnbWFpbiBsb2FkJyk7XG4gICAgLy8gZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInllbGxvd1wiO1xuXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAxKSB7XG4gICAgICAgICAgLy8gJCgnI21hc3RoZWFkJykuYWRkQ2xhc3MoXCJzdGlja3lcIik7XG4gICAgICAgICAgJCgnc2VjdGlvbi5zaXRlLWJhbm5lcicpLmFkZENsYXNzKCdzdGlja3knKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyAkKCcjbWFzdGhlYWQnKS5yZW1vdmVDbGFzcyhcInN0aWNreVwiKTtcbiAgICAgICAgICAkKCdzZWN0aW9uLnNpdGUtYmFubmVyJykucmVtb3ZlQ2xhc3MoJ3N0aWNreScpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKCdpdCB3b3JrcycpO1xuXG4gIH0pO1xuXG5cbi8vIG1haW4uanNcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkgeyAvLyBGaXhpbmcgJ3VzZSBzdHJpY3QnXG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIC8vIGNvbXBhcmluZyB3aXRoID09IGdlbmVyYXRlcyBhIHdhcm5pbmdcbiAgICBpZiAoJ3Rlc3RpbmcnID09PSAndGVzdGluZycpIHtcbiAgICAgIGNvbnNvbGUubG9nKCQpO1xuICAgIH1cbiAgfSk7XG4iLCIvLyBkb3MuanNcbmNvbnNvbGUubG9nKCdkb3MnKTtcblxuIiwiLy8gb25lLmpzXG5jb25zb2xlLmxvZygnb25lJyk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
