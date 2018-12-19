(function ($) {
    $(document).ready(function(){
        $('.we-mega-menu-submenu').hover(
          function(){ $(this).parent().toggleClass('hover')
                      $('#block-cvad-search').removeClass('openSearch')}
        );
        
        
       // add hover class to homepage tabs when hovered over
        $('.homepage-tab__link').hover(
          function(){ $(this).parent().addClass('hover').siblings().removeClass('hover') }
        );
        
        // open search bar
        $('#block-cvad-search').click(
          function(){ 
              $(this).addClass('openSearch')
          });
        
        $('main').click(
          function(){ 
              $('#block-cvad-search').removeClass('openSearch')
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
            $('#block-cvad-search').removeClass('openSearch');
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