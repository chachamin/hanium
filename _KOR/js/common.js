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

	//popup_zone_sd
	$('.popup_zone_sd').on('init', function(event, slick) {
      $(this).siblings('.slick-controls').children('.slick-nav').children('.slick-count').append('<span class="current red fw_3"></span> · <span class="total fw_3"></span>');
      $('.current').text(slick.currentSlide + 1);
      $('.total').text(slick.slideCount);
    })
	popup_zone_sd = $('.popup_zone_sd').slick({
		autoplay: true,
		dots: false,
		pauseOnDotsHover: false,
		pauseOnHover: false,
		speed: 600,
		arrows: false,
		autoplaySpeed: 5000,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		cssEase: 'linear'
		
	}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      $('.current').text(nextSlide + 1);
    });

	//  main_sns_sd
	$('.main_sns_sd').slick({
		autoplay: true,
		dots: true,
		pauseOnDotsHover: false,
		pauseOnHover: false,
		speed: 600,
		arrows: false,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		cssEase: 'linear',
		responsive: [
			{
			  breakpoint: 1180,
			  settings: {
				centerMode: true,
				slidesToShow: 2
			  }
			},

			{
			  breakpoint: 720,
			  settings: {
			   
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
			   
				slidesToShow: 1
			  }
			}
		  ]
	});

	//  main_ban_sd
	$('.main_ban_sd').slick({
		autoplay: true,
		dots: false,
		pauseOnDotsHover: false,
		pauseOnHover: false,
		speed: 600,
		arrows: false,
		fade: false,
		slidesToShow: 6,
		slidesToScroll: 1,
		infinite: true,
		cssEase: 'linear',
		responsive: [

			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 4
			  }
			},
			{
			  breakpoint: 1000,
			  settings: {
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 720,
			  settings: {
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 360,
			  settings: {
				slidesToShow: 1
			  }
			}
		  ]
	});

	//  fac_sd
	$('.fac_sd').slick({
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
		cssEase: 'linear'
	});

	// 언론보도&홍보 모바일에서만 슬라이드
	mobileOnlySlider(".prom_sd", true, false, 821);

	function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
		var slider = $($slidername);
		var settings = {
			mobileFirst: true,
			dots: $dots,
			arrows: $arrows,			
			responsive: [
				{
					breakpoint: $breakpoint,
					settings: "unslick"
				},
				{
				  breakpoint: 720,
				  settings: {
					slidesToShow: 1,
					centerMode: true
				  }
				},
				{
				  breakpoint: 420,
				  settings: {
					slidesToShow: 1
				  }
				}
			]
		};

		slider.slick(settings);

		$(window).on("resize", function () {
			if ($(window).width() > $breakpoint) {
				return;
			}
			if (!slider.hasClass("slick-initialized")) {
				return slider.slick(settings);
			}
		});
	} 
	
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

// -------------------------- 메인 탭 --------------------------
$('.board_tabs > li > a.tablink').on('focus click' ,function(){
	$(this).addClass('active');		
	$(this).parent('li').addClass('active');		
	$(this).parent('li').siblings('li').removeClass('active');
	$(this).parent('li').siblings('li').find('a').removeClass('active');		
	$(this).parent('li').find('div').css('display','block');
	$(this).parent('li').siblings('li').find('div').css('display','none');
	$(this).parent('li').find('a.more').css('display','inline-flex');
	$(this).parent('li').siblings('li').find('a.more').css('display','none');
});

// -------------------------- 전체메뉴 클릭시 html --------------------------
	$(".open_all_nav").click(function(){
		$('html').addClass("active");
	});
	$(".close_all_nav").click(function(){
		$('html').removeClass("active");
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

// -------------------------- 접근성 레이어팝업 --------------------------
	if (typeof jQuery === "undefined") throw new Error("Modal requires jQuery.");
	$(".open-lp").on("click", function() {
		var op = $(this);
		var lp = $("#" + $(this).attr("aria-controls"));
		var lpObj = lp.children(".layer_flex");
		var lpObjClose = lp.find(".layer_pop_close");
		var lpObjTabbable = lpObj.find("button, input:not([type='hidden']), select, iframe, textarea, [href], [tabindex]:not([tabindex='-1'])");
		var lpObjTabbableFirst = lpObjTabbable && lpObjTabbable.first();
		var lpObjTabbableLast = lpObjTabbable && lpObjTabbable.last();
		var lpOuterObjHidden = $(".layer_con"); // 레이어 바깥 영역의 요소
		var all = $(".layer_con").add(lp);
		var tabDisable;
		var nowScrollPos = $(window).scrollTop();

		$("body").css("top", - nowScrollPos).addClass("scroll-off").on("scroll touchmove mousewheel", function(event){
			event.preventDefault();
			event.stopPropagation();
			return false;
		});

		function lpClose() { // 레이어 닫기 함수
			$("body").removeClass("scroll-off").css("top", "").off("scroll touchmove mousewheel");
			$(window).scrollTop(nowScrollPos); // 레이어 닫은 후 화면 최상단으로 이동 방지
			if (tabDisable === true) lpObj.attr("tabindex", "-1");
			all.removeClass("on");
			lpOuterObjHidden.removeAttr("aria-hidden");
			op.focus(); // 레이어 닫은 후 원래 있던 곳으로 초점 이동
			$(document).off("keydown.lp_keydown");
		}

		$(this).blur();
		all.addClass("on");        
		lpOuterObjHidden.attr("aria-hidden", "true"); // 레이어 바깥 영역을 스크린리더가 읽지 않게
		lpObjTabbable.length ? lpObjTabbableFirst.focus().on("keydown", function(event) { 
			// 레이어 열리자마자 초점 받을 수 있는 첫번째 요소로 초점 이동
			if (event.shiftKey && (event.keyCode || event.which) === 9) {
				// Shift + Tab키 : 초점 받을 수 있는 첫번째 요소에서 마지막 요소로 초점 이동
				event.preventDefault();
				lpObjTabbableLast.focus();
			}
		}) : lpObj.attr("tabindex", "0").focus().on("keydown", function(event){
			tabDisable = true;
			if ((event.keyCode || event.which) === 9) event.preventDefault();
			// Tab키 / Shift + Tab키 : 초점 받을 수 있는 요소가 없을 경우 레이어 밖으로 초점 이동 안되게
		});

		lpObjTabbableLast.on("keydown", function(event) {
			if (!event.shiftKey && (event.keyCode || event.which) === 9) {
				// Tab키 : 초점 받을 수 있는 마지막 요소에서 첫번째 요소으로 초점 이동
				event.preventDefault();
				lpObjTabbableFirst.focus();
			}
		});
	  
		lpObjClose.on("click", lpClose); // 닫기 버튼 클릭 시 레이어 닫기

		lp.on("click", function(event){
			if (event.target === event.currentTarget) {
				// 반투명 배경 클릭 시 레이어 닫기
				lpClose();
			}
		});
		
		$(document).on("keydown.lp_keydown", function(event) {
			// Esc키 : 레이어 닫기
			var keyType = event.keyCode || event.which;
		  
			if (keyType === 27 && lp.hasClass("on")) {
			  lpClose();
			}
		});
	});

// -------------------------- Gnb 3차메뉴 오버 --------------------------
	$(".dep3_on").click(function(){
		$(".dep3_on").removeClass("on");
		$(".gnb_dep2 li").removeClass("on");
		$('.gnb_dep1 > li').removeClass("active");
		var gnbDepth = $(this).parent().siblings("ul").css("display");
		if( gnbDepth == "block" ) {
			$(this).parent().siblings("ul").slideUp(300);
		} else {
			$(this).addClass("on");
			$(this).parent().parent().parent().parent("li").addClass("active");
			$(".gnb_dep3").slideUp(300);
			$(this).parent().siblings("ul").slideDown(300);
		}
	});
	

// -------------------------- mGnb 메뉴 열기닫기  --------------------------

	$("#mMenu").click(function(){
		$("#mGnb").css("display","block");
		$("#mGnb").animate({right: 0}, 300);			
		$(".mDepth1 > li:first-child > .mDepth2").css("display","block");
	});

	
	$(".mDepth1 > li > a").click(function(){
		$(this).addClass("active");
		$(this).parent().siblings().children("a").removeClass("active");
		$(this).parent().children("ul").stop().slideDown();
		$(this).parent().siblings().children("ul").stop().slideUp();
	});
	//mGnb menu
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

// -------------------------- [서브] 디자인기업 DB 개인정보 동의 --------------------------

	$(".open_chk_con").click(function(){
		$(this).toggleClass("on");
		$(this).parent().siblings(".con").stop().slideToggle();		
	});

//  -------------------------- [서브] 컨텐츠탭 --------------------------
	//페이지로딩시
	$(".pg_tabcon").hide(); // 전체 콘텐츠 감추기
	$("ul.pg_tab li:first").addClass("on").show(); 
	$(".pg_tabcon:first").show(); //첫번째 컨텐츠만 보이기

	//클릭시
	$("ul.pg_tab li").click(function() {

		$("ul.pg_tab li").removeClass("on"); //전체 클래스 on 
		$(this).addClass("on"); //클릭 tab에 on 추가
		$(".pg_tabcon").hide(); //콘텐츠 감추기

		var activeTab = $(this).find("a").attr("href"); 
		$(activeTab).fadeIn(); //ID 일치하는 콘텐츠 펼치기
		return false;
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

});


// -------------------------- mGnb close --------------------------
function mGnbClose() {
	$("#mGnb").animate({right: "-100%"}, 300);
	$("#mGnb").fadeOut(300);
	$(".mDepth2 > li > a").removeClass("active");
	$(".mDepth3").slideUp(300);
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
	dep3_on = $(".dep3_on");
	depth3 = $(".gnb_dep3");
	mask = $( '.tmnBg' );

	var depth2 = $('.gnb_dep2'),
		lnbLeave = $(".sitem_map,.ico_search");


	depth1.find(" > li > a").off();

	
	var dep1_length = depth1.find(" > li").size();
	for (i=1;i <= dep1_length;i++) {
		depth1.find("> li:nth-child("+i+") .top2m").addClass('m'+i);
	}

	depth1.find(" > li > a").on('mouseenter focusin',function(event){
		event.preventDefault ();		
		mask.stop().addClass('on');
		$('.top2m').addClass('on');
		gnbarea.addClass('on');
		depth1.addClass('on');		
	});

	depth1.mouseleave(function(){
		mask.removeClass('on');
		depth2.removeClass('on');
		depth1.removeClass('on');
		gnbarea.removeClass('on');
		dep3_on.removeClass('on');
		depth3.stop().delay('200').slideUp('1000');
	});
	$('.depth1').on('mouseleave',function(){
	 	$(this).find('.top2m').removeClass('on');
		mask.removeClass('on');
		dep3_on.removeClass('on');
		depth3.stop().delay('200').slideUp('1000');
	});
	
	lnbLeave.focusin(function(){
		mask.removeClass('on');
		depth2.removeClass('on');
		depth1.removeClass('on');
		dep3_on.removeClass('on');
		depth3.stop().delay('200').slideUp('1000');
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
