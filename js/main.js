$(function () {

    // Preloader
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');



    // Hamburger
    $('.menu-open').click(function () {
        $('.menu-collapse').toggleClass('d-none').css('order','1');
        $('.menu').toggleClass('menu-opened');
    });
    $(".sidebarIconToggle").click(function(){
      $(".menu-nav").slideToggle("slow");
    });
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
        $(this).toggleClass('open');
    });

	// плавное перемещение страницы к нужному блоку
    $("a.go").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });

    // Параллакс от скролла
    $(window).bind('scroll',function(e){
        parallaxScroll();
    });
    function parallaxScroll(){
        var scrolled = $(window).scrollTop();
        $('.boy').css('top',(0-(scrolled*0.75))+'px');
    }

    // Всплывающее окно

    $('.button,.consultation-call__btn').click(function (e) {
        e.preventDefault();
        $('#exampleModal').arcticmodal();
    });

    // Большой слайдер
    
    $('.big-slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
    });


    var defaults = {
		containerID: 'toTop', // fading element id
		containerHoverID: 'toTopHover', // fading element hover id
		scrollSpeed: 1200,
		easingType: 'linear'
		};

	 
	$().UItoTop({ easingType: 'easeOutQuart' });
});

    
