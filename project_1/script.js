// mobile nav
menu.onclick = function myFunction() {
  var x = document.getElementById('myTopnav');

  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// navigation section
$(document).ready(function(){
  $('.nav_item_link').on('click', function(e) {
    e.preventDefault();

    showSection($(this).attr('href'), true);
  });
  showSection(window.location.hash, false);
}); // - > ready_end;

$(window).scroll(function(){
  checkSection()
}); // -> scroll_end;

function showSection(section, isAnimate){
  var
    direction = section.replace(/#/, ''),
    reqSection = $('section').filter('[data-section="' + direction + '"]'),
    reqSectionPos = reqSection.offset().top;
  if (isAnimate) {
    $('body, html').animate({scrollTop: reqSectionPos}, 500);
  }else {
    $('body, html').scrollTop(reqSectionPos);
  }
}

function checkSection(){
  $('.section').each(function(){
    var
      $this = $(this),
      topEdge = $this.offset().top,
      bottomEdge = topEdge + $this.height(),
      wScroll = $(window).scrollTop();
    if (topEdge < wScroll && bottomEdge > wScroll){
      var
        currentId = $this.data('section'),
        reqLink = $('.nav_item_link').filter('[href="#' + currentId + '"]');
      reqLink.closest('.nav_item').addClass('active')
        .siblings().removeClass('active');


    }
  });
}
