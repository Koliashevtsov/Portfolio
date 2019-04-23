$(function () {
  $('.toggles button').click(function(){
    var get_id = this.id;
    var get_current = $('.posts .' + get_id);

    $('.post').not(get_current).hide(500);
    get_current.show(500);
  });

  $('#show_all').click(function () {
    $('.post').show(500);
  });
});

// owncarousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 6,
    nav: true,
    loop: true
  });
});

if ($(window).width() < 420) {
  $(".owl-carousel").owlCarousel({
    items: 3
  });
}
