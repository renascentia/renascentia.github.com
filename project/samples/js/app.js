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

$('.owl-carousel').owlCarousel({
	loop:true,
	margin:0,
	autoplay: true,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	nav:true,
	navText: [
	"<div class='owl-icon prev'><i class='icon-arrow-left'></i></div>",
	"<div class='owl-icon next'><i class='icon-arrow-right'></i></div>"
	],
	responsive:{
	    0:{
	        items:1
	    },
	    600:{
	        items:2
	    },
	    1700:{
	        items:3
	    }
	}
});

$('.owl-carousel-category').owlCarousel({
    loop:false,
    margin:0,
    autoplay: false,
    nav:false,
    navText: [
	"<div class='owl-icon prev'><i class='icon-arrow-left'></i></div>",
	"<div class='owl-icon next'><i class='icon-arrow-right'></i></div>"
	],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        }
    }
})