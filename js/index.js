$(function(){
	//设置滚动区域
	setTimeout(function(){
		var mRight = parseInt($('.mcBox').children('a').css('margin-right'));
		var length = $('.mcBox').children('a').length;
		var width = parseInt($('.mcBox').children('a').css('width'));
		$('.mcBox').width((mRight+width)*length);
	},100);
	//选择
	$('.mcBox>a').on('click',function(){
		$(this).siblings('a').removeClass('aHasActive');
		$(this).addClass('aHasActive');
	});
	setTimeout(function(){
		$('.smBox .smRight').height($('.smBox .smLeft').height());
	},100);
});
