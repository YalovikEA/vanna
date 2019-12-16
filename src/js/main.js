$(document).ready(function() {
  svg4everybody({});

  $('.slider').each(function() {
    $(this).owlCarousel({
      // stagePadding: 305,
      animateOut: 'fadeOut',
      smartSpeed: 1000,
      center: true,
      loop: true,
      margin: 45,
      nav: true,
      dots: false,
      responsive:{
          0:{
              items: 1
          },
          768:{
              items: 4
          },
          1681:{
              items: 6
          }
      }
    });
  })
});
