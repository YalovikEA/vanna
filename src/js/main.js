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

  var contactsToggle = $('.contacts__main')
  var menuToggle = $('.menu-toggle__btn');
  var mobileMenu = $('.mobile-menu');
  var contactsWrapper = $('.mobile-menu__contacts-wrapper');
  var menuWrapper = $('.mobile-menu__main-wrapper');
  var catalog = $('.catalog__toggler');
  var catalogList = $('.catalog__list');
  var catalogItem = $('.catalog__item');
  var subcatalog = $('.subcatalog');
  var subcatalogBlock = $('.subcatalog__block');
  var subcatalogList = $('.subcatalog__list');

  contactsToggle.on('click', function() {
    $('.mobile-menu .contacts__main').toggleClass('active');
    if(!menuToggle.hasClass('active')) {
      mobileMenu.toggleClass('active');
      menuWrapper.fadeToggle(0);
      contactsWrapper.fadeToggle(0);
    } else {
      menuWrapper.fadeToggle(0);
      contactsWrapper.fadeToggle(0);
    }
  })

  menuToggle.on('click', function() {
    if(!mobileMenu.hasClass('active') && !$(this).hasClass('active')) {
      $(this).addClass('active');
      mobileMenu.addClass('active');
      contactsWrapper.fadeOut(0);
      $('.mobile-menu .contacts__main').removeClass('active');
      menuWrapper.fadeIn(0);
    } else if (mobileMenu.hasClass('active') && !$(this).hasClass('active')){
      $(this).addClass('active');
      contactsWrapper.fadeOut(0);
      $('.mobile-menu .contacts__main').removeClass('active');
      menuWrapper.fadeIn(0);
    } else {
      $(this).removeClass('active');
      mobileMenu.removeClass('active');
    }
  })

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
