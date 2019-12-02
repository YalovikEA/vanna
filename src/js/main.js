$(document).ready(function() {
  svg4everybody({});

  $('.slider').owlCarousel({
    // stagePadding: 305,
    center: true,
    loop: true,
    margin: 45,
    nav: true,
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 2
        },
        1000:{
            items: 5
        }
    }
  });
});
