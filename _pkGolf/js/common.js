$(document).ready(function(){
	//  main_v_sd
	$('.main_v_sd').slick({
		autoplay: true,
		dots: true,
		pauseOnDotsHover: false,
		pauseOnHover: false,
		speed: 600,
		arrows: false,
		autoplaySpeed: 5000,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		cssEase: 'linear',
		responsive: [
			{
			  breakpoint: 1280,
			  settings: {			 
				adaptiveHeight: true
			  }
			}

		  ]	
	});

	$('.main_v_sd').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
		$('.main_v_sd .item').removeClass('active');
		$('.main_v_sd .slick-current .item').addClass('active');
	});

	//공동 재생 멈춤
	slick_stop = $('.slick-stop').on('click', function() {
		$(this).siblings('.slick-play').css('display','inline-block').focus();
		$(this).css('display','none');
		$(this).parent().parent().siblings('.slick-slider').slick('slickPause');
	});

	$('.slick-play').on('click', function() {
		$(this).siblings('.slick-stop').css('display','inline-block').focus();
		$(this).css('display','none');
		$(this).parent().parent().siblings('.slick-slider').slick('slickPlay');
	});
	$('.slick-prev').on('click', function() {
		$(this).parent().parent().siblings('.slick-slider').slick('slickPrev');
		$(this).parent().parent().siblings('.slick-slider').slick('slickPause');
		$(this).siblings('.slick-play').css('display','inline-block');
		$(this).siblings('.slick-stop').css('display','none');
	});

	$('.slick-next').on('click', function() {
		$(this).parent().parent().siblings('.slick-slider').slick('slickNext');
		$(this).parent().parent().siblings('.slick-slider').slick('slickPause');
		$(this).siblings('.slick-play').css('display','inline-block');
		$(this).siblings('.slick-stop').css('display','none');
	});



// -------------------------- 메인 주요사업 --------------------------
	$(".main_major_item > li > a").on('focus click' ,function(){		
		$(this).parent('li').addClass('active');	
		$(this).parent('li').siblings('li').removeClass('active');
	});

// -------------------------- 아코디언 --------------------------
	$(".accordion_btn > a, .all_nav_flod").click(function(){
		$(this).toggleClass("on");
		$(this).parent().parent().children(".accordion_con").stop().slideToggle();
		$(this).parent().siblings().children(".accordion_con").stop().slideUp();
	});


// -------------------------- mGnb 메뉴 열기닫기  --------------------------

	$("#mMenu").click(function(){
		$("#mGnb").css("display","block");
		$("#mGnb").animate({right: 0}, 300);
		$("#dimed").fadeIn(300);
	});
	
	$(".mDepth1 > li > a").click(function(){
		$(".mDepth1 > li > a").removeClass("active");
		$(".mDepth2 li").removeClass("active");
		var mDepth2 = $(this).siblings("ul").css("display");
		if( mDepth2 == "block" ) {
			$(this).siblings("ul").slideUp(300);
		} else {
			$(this).addClass("active");
			$(".mDepth2").slideUp(300);
			$(this).siblings("ul").slideDown(300);
		}
	});
	/*mGnb menu*/
	$(".mDepth2 > li > a").click(function(){
		$(".mDepth2 > li > a").removeClass("active");
		$(".mDepth3 li").removeClass("active");
		var mDepth3 = $(this).siblings("ul").css("display");
		if( mDepth3 == "block" ) {
			$(this).siblings("ul").slideUp(300);
		} else {
			$(this).addClass("active");
			$(".mDepth3").slideUp(300);
			$(this).siblings("ul").slideDown(300);
			$(this).siblings("ul").find("li").addClass("active");
		}
	});

//  -------------------------- 모바일 메뉴 토글 --------------------------
	$('html').click(function(e) {
        if($(e.target).hasClass("navAcrtive")) {
        }else{
			$("#nav .depth1 > li:last-child > a").removeClass("navActive");
			$("#nav .depth2").slideUp(300);
        }
    });

// -------------------------- [서브] snb --------------------------
	$(".snb_select").click(function(){
		$(this).toggleClass("on");
		$(this).parent().children("ul").stop().slideToggle();
		$(this).parent().siblings().children("ul").stop().slideUp();
	});


// -------------------------- gotop top bottom --------------------------

	$(".loca_nav .top, .to_top .top").click(function(){
		$("html, body").animate({scrollTop:0}, 500);
	});
	$('.loca_nav .bottom').click(function() {
	    $('body,html').animate({scrollTop: $(document).height()}, 500);
    return false;
	});

// -------------------------- 스킵네비 포커스잡아주기--------------------------
    $("#skipNavi > a").click(function(){
    $($(this).attr("href"))
      .attr("tabindex","0")
      .css("outline","0")
      .focus();
    });

	// a태그 hash 스무스하게
	$('a.smooth[href*="#"]')	  
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {		
		if (
		  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		  && 
		  location.hostname == this.hostname
		) {
		 
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		  
		  if (target.length) {
			
			event.preventDefault();
			$('html, body').animate({
			  scrollTop: target.offset().top
			}, 1000, function() {
			  var $target = $(target);
			  $target.focus();
			  if ($target.is(":focus")) {
				return false;
			  } else {
				$target.attr('tabindex','-1'); 
				$target.focus(); // Set focus again
			  };
			});
		  }
		}
	  });

// -------------------------- 예약 달력 --------------------------
	$(".time_tab > li > a").click(function(){
		$(this).addClass("active");
		$(this).parent().siblings().children("a").removeClass("active");
	})

	$(".wk_01 .able").click(function(){
		$(".tg_01").addClass("open");
		$(".tg_02").removeClass("open");
		$(".tg_03").removeClass("open");
		$(".tg_04").removeClass("open");
		$(".tg_05").removeClass("open");
	})
	$(".wk_02 .able").click(function(){
		$(".tg_02").addClass("open");
		$(".tg_01").removeClass("open");
		$(".tg_03").removeClass("open");
		$(".tg_04").removeClass("open");
		$(".tg_05").removeClass("open");
	})
	$(".wk_03 .able").click(function(){
		$(".tg_03").addClass("open");
		$(".tg_01").removeClass("open");
		$(".tg_02").removeClass("open");
		$(".tg_04").removeClass("open");
		$(".tg_05").removeClass("open");
	})
	$(".wk_04 .able").click(function(){
		$(".tg_04").addClass("open");
		$(".tg_01").removeClass("open");
		$(".tg_02").removeClass("open");
		$(".tg_03").removeClass("open");
		$(".tg_05").removeClass("open");
	})
	$(".wk_05 .able").click(function(){
		$(".tg_05").addClass("open");
		$(".tg_01").removeClass("open");
		$(".tg_02").removeClass("open");
		$(".tg_03").removeClass("open");
		$(".tg_04").removeClass("open");
	})
});


// -------------------------- mGnb close --------------------------
function mGnbClose() {
	$("#mGnb").animate({right: "-100%"}, 300);
	$("#mGnb").fadeOut(300);
	$(".mDepth2 > li > a").removeClass("active");
	$(".mDepth3").slideUp(300);
	$("#dimed").slideUp(300);
}

//  -------------------------- mGnb display --------------------------
$( window ).resize(function() {
	var winWidth = $( window ).width();
	if(winWidth >= 1440) {
		mGnbClose();			
		} else {
		mGnbClose();
		}
});


// -------------------------- 상단으로 나타나기 --------------------------
$( window ).scroll( function() {
	if ( $( this ).scrollTop() > 360 ) {
		$( '.loca_nav' ).fadeIn(500);
	} else {
		$( '.loca_nav' ).fadeOut(500);
	}

} );


function choiceFocus(arrId){
	var menuH = document.querySelector("#gnb").offsetHeight;
	var div_location = document.querySelector("#year"+arrId).offsetTop;
	window.scrollTo({top:div_location + 350, behavior:'smooth'});
}



//  -------------------------- gnb  --------------------------

function web_menu(a){
	var gnbarea = $('#header');
	var lnb = $('#gnb'),
	depth1 = $(".gnb_dep1");
	depth1.find(" > li > ul").addClass('top2m');
	depth1.find(" > li").each(function(){
		var Index = $(this).index()+1;
		$(this).addClass('mn'+Index);
	});
	mask = $( '.tmnBg' );

	var depth2 = $('.gnb_dep2'),
		lnbLeave = $(".sitem_map,.ico_search");

	depth2.hide();
	depth1.find(" > li > a").off();

	
	var dep1_length = depth1.find(" > li").size();
	for (i=1;i <= dep1_length;i++) {
		depth1.find("> li:nth-child("+i+") .top2m").addClass('m'+i);
	}

	depth1.find(" > li > a").on('mouseenter focusin',function(event){
		event.preventDefault ();		
		mask.stop().slideDown('1000');
		$('.top2m').stop().delay('200').slideDown('1000');
		gnbarea.addClass('on');
		depth1.addClass('on');		
	});

	depth1.mouseleave(function(){
		mask.stop().delay('200').slideUp('1000');
		depth2.stop().slideUp('1000');
		depth1.removeClass('on');
		gnbarea.removeClass('on');
	});
	$('.depth1').on('mouseleave',function(){
	 	$(this).find('.top2m').stop().slideUp('1000');
		mask.stop().delay('200').slideUp('1000');
	});
	
	lnbLeave.focusin(function(){
		mask.stop().delay('200').slideUp('1000');
		depth2.stop().slideUp('1000');
		depth1.removeClass('on');
	});

};
$(function () {
	$(window).on({
		load: function () {
			if ($(window).width() > 1280) {
				web_menu();
			}
		}
	});
});

// -------------------------- 화면확대축소 --------------------------
$(function(){

	var zoom = 1;
	$(".zoom_plus").click(function() {
		var T = Number('1e'+1);
		if(zoom == 1.5){
			alert("최대 화면 크기 입니다.\n더 이상 확대하실 수 없습니다");
			return false;
		}
		zoom = Math.round((zoom+0.1)*T)/T;
		$("body").css("zoom",zoom);
	});
	$(".zoom_minus").click(function() {
		var T = Number('1e'+1);
		if(zoom == .8) {
			alert("최소 화면 크기 입니다.\n더 이상 축소하실 수 없습니다.");
			return false;
		}
		zoom = Math.round((zoom-0.1)*T)/T;
		$("body").css("zoom",zoom);
	});
	$(".zoom_off").click(function() {
		zoom = 1;
		$("body").attr("style",'');
	});
});	


// fixed header(pc)
$(window).scroll(function() {
	if($(window).width() > 300) {
		var scroll = $(window).scrollTop();
		if (scroll >= 70) {
			$("#header").addClass("fixed");			

		} else {
			$("#header").removeClass("fixed");	
		}
	}
});
