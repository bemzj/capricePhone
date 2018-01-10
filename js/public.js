$(function(){
	//实例化轮播图
	var mySwiper = new Swiper('.swiper-container-index', {
		loop: true,
		pagination: '.swiper-pagination',
		paginationClickable :true,
		autoplayDisableOnInteraction : false
	});
	//出现清除按钮
	$('.searchIn input').on('click',function(){
		if($(this).val().length>0)
		{
			$(this).siblings('.closeInput').show();
		}else{
			$(this).siblings('.closeInput').hide();
		}
	});
	$('.searchIn input').on('input',function(){
		if($(this).val().length>0)
		{
			$(this).siblings('.closeInput').show();
		}else{
			$(this).siblings('.closeInput').hide();
		}
	});
	$('.searchIn .closeInput').on('click',function(){
		$(this).siblings('input').val("");
		$(this).hide();
	});
	//出现搜索框
	$('.searchBox').on('click',function(){
		
		if($(this).attr('isOpen')=='false')
		{
			$(this).attr('isOpen',true);
			$('.searchOut').stop().slideDown(400);
		}else{
			$(this).attr('isOpen',false);
			$('.searchOut').stop().slideUp(400);
		}
	});
	//出现语言框
	$('.language').on('click',function(){
		
		if($(this).attr('isOpen')=='false')
		{
			$(this).attr('isOpen',true);
			$(this).siblings('ul').stop().slideDown(400);
			$(this).siblings('img').addClass('languageUp');
		}else{
			$(this).attr('isOpen',false);
			$(this).siblings('ul').stop().slideUp(400);
			$(this).siblings('img').removeClass('languageUp');
		}
	});
	//出现二级导航
	$('.moreNav').on('click',function(){
		$('.searchOut').stop().hide();
		$('.searchBox').attr('isOpen',false);
		if($(this).attr('isOpen')=='false')
		{
			$(this).attr('isOpen',true);
			$('.secondBox').stop().slideDown(500);
			$('.searchBox').hide();
			$(this).children('img').eq(0).stop().fadeOut(200);
			$(this).children('img').eq(1).stop().fadeOut(200);
			$(this).find('.lineBox').eq(0).find('img').addClass('rotate45');
			$(this).find('.lineBox').eq(1).find('img').addClass('rerotate45');
		}else{
			$(this).attr('isOpen',false);
			$('.secondBox').stop().slideUp(500);
			$('.searchBox').show();
			$(this).children('img').eq(0).stop().fadeIn(200);
			$(this).children('img').eq(1).stop().fadeIn(200);
			$(this).find('.lineBox').eq(0).find('img').removeClass('rotate45');
			$(this).find('.lineBox').eq(1).find('img').removeClass('rerotate45');
			$('.language').attr('isOpen',false);
			$('.language').siblings('ul').stop().slideUp(400);
			$('.language').siblings('img').removeClass('languageUp');
		}
	});
	
});
