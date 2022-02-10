$(document).ready(function() {
    $('a').on('mouseover',function(){
        $('.ball').addClass('ball-grow');
        $('.ball2').addClass('small-hide');
    });

    $('a').on('mouseleave',function(){
        $('.ball').removeClass('ball-grow');
        $('.ball2').removeClass('small-hide');
    });
})