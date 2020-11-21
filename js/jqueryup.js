// Home Page 1st Card Slider
$(document).ready(function() {
    $('#showcase__card__slider').lightSlider({
        autoWidth:true,
        loop:true,
        speed: 1000, //ms'
        auto: true,
        pause: 3000,
        onSliderLoad: function() {
            $('#showcase__card__slider').removeClass('cS-hidden');
        } 
    });  
});