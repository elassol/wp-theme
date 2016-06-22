// main.js
$(document).ready(function() {

    console.log('main load');
    // document.body.style.backgroundColor = "yellow";

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){  
            $('header.main-header').addClass("sticky");
        } else{
            $('header.main-header').removeClass("sticky");
        }
    });

    console.log('works')
    

});