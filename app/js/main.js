/* NAV ADD CLASS FOR BG */
$(document).ready(function(){
    $(".navbar-toggler").click(function(){
        $("#nav").toggleClass("bg-nav");
    })
});



/* SLIDER CONFIGURATION */
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    items:4,
    responsive:{
        0:{
            items:1,
            dots: false
        },
        600:{
            items:3,
            nav: false,
            dots: false
        },
        1000:{
            items:3,
            dots: false
        }
    }
})
});