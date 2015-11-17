// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$('.top-bar .search-icon').click(function(event) {
      if ($('.top-bar-section li.search-field').hasClass('open')){
        $('.top-bar-section li.search-field').animate({width: "0px", margin: "0px",display: 'none'}, 500).removeClass('open')
      } else {
        $('.top-bar-section li.search-field').animate({width: "160px", margin: "0 20px 0 0",display: 'block'}, 500).addClass('open')
      }
  });