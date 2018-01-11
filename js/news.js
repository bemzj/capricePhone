$(function(){
	setTimeout(function() {
		$('.smBox .smRight').height($('.smBox .smLeft').height());
	}, 100);
	//关闭详情
	$('.closeDetails').on('click',function(){
		$('#details').slideUp();
	});
	//新闻详情
	$('#news .smBox').on('click',function(){
		$('#details').slideDown();
	});
	
});
