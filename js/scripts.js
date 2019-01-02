(function ($) {
    $(document).ready(function(){
        $('.we-mega-menu-submenu').hover(
          function(){ $(this).parent().toggleClass('hover')
                      $('#search-block-form').removeClass('openSearch')}
        );
        
        $('.homepage-tab__title').on('click', function() {
            $(this).parent().toggleClass('tabOpen')
            $(this).parent().siblings().removeClass('tabOpen')
        });

         if (jQuery(window).width() > 991) { 
           // add hover class to homepage tabs when hovered over
            $('.homepage-tab__title').hover(
                function(){ $(this).parent().addClass('hover').siblings().removeClass('hover') }
            );
         } else {}
        
        // open search bar
        $('#search-block-form').click(
          function(){ 
              $(this).addClass('openSearch')
          });
        
        $('main').click(
          function(){ 
              $('#search-block-form').removeClass('openSearch')
          });
        
        if ($(window).width() < 992) {
            $('li.we-mega-menu-li').removeClass('active active-trail open');
        }
    });
    
    // add class to header when window is scrolled down
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            $('.header').addClass('header--scroll');
            $('#search-block-form').removeClass('openSearch');
        } else {
            $('.header').removeClass('header--scroll');
        }
        
    });
    
    var $s = $("#slick-views-upcoming-events-block-1-1-slider");

    $s.slick({
        autoplaySpeed: 1500, // Set the initial autoplaySpeed (for slide 0)
        autoplay: true,
        pauseOnHover: true
    })

}(jQuery));