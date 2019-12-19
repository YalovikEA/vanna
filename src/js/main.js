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

  var catalog = $('.catalog__toggler');
  var catalogList = $('.catalog__list');
  var catalogItem = $('.catalog__item');
  var subcatalog = $('.subcatalog');
  var subcatalogBlock = $('.subcatalog__block');
  var subcatalogList = $('.subcatalog__list');

  catalog.on('click', function() {
    $(this).toggleClass('active');
    $(this).siblings(catalogList).slideToggle(500);
  })

  catalogItem.on('click', function(e) {
    e.stopImmediatePropagation();
    $(this).toggleClass('active');
    $(this).find(subcatalog).slideToggle(500);
  })

  subcatalogBlock.on('click', function(e) {
    e.stopImmediatePropagation();
    $(this).toggleClass('active');
    $(this).find(subcatalogList).slideToggle(500);
  })
});
