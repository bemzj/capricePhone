$(function(){
	//实例化轮播图
	var mySwiper = new Swiper('.swiper-container-produce', {
		loop: true,
		pagination: '.swiper-pagination',
		paginationClickable :true,
		autoplayDisableOnInteraction : false,
		autoplay:5000
	});
	//详情
	$('.detailIndex').on('click',function(){
		$('#paramBox').hide();
		$('#banner').show();
		$('#produce').show();
	});
	//参数
	$('.param').on('click',function(){
		$('#paramBox').show();
		$('#banner').hide();
		$('#produce').hide();
	});
	//返回上一页
	$('.back').on('click',function(){
		window.history.go(-1); 
	});
});
