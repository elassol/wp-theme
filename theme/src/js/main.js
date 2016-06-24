// main.js
$(document).ready(function() {

    console.log('main load');
    // document.body.style.backgroundColor = "yellow";

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){  
            $('#masthead').addClass("sticky");
        } else{
            $('#masthead').removeClass("sticky");
        }
    });

    console.log('it works');


    

});