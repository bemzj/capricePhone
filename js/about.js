$(function(){
	//开启滑动动画
	if(!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
		(function() {
			window.scrollReveal = new scrollReveal({
				reset: true
			});
		})();
	};
	$('.threeBox ul li button').on('click',function(){
		var index =parseInt($(this).attr('index'));
		$('.threeBox ul li button').removeClass('liBtnActive');
		$(this).addClass('liBtnActive');		
		switch(index){
			case 1:
				
				$('#information').show().addClass('animated bounceInUp');
				$('#progress').hide();
				$('#honor').hide();
				break;
			case 2:
				$('#progress').show().addClass('animated bounceInUp');
				$('#information').hide();
				$('#honor').hide();
				break;
			case 3:
				$('#honor').show().addClass('animated bounceInUp');
				$('#progress').hide();
				$('#information').hide();
				break;
		}
	});
	$('.hbImg').on('click',function(){
		$('#popWindow').fadeIn(500);
		$('#popWindow img').attr('src',$(this).find('img').attr('src'));
		$('#popWindow div').each(function() {
			new RTP.PinchZoom($(this), {});
		});
	});
	
	$('#popWindow').on('click',function(){
		$(this).fadeOut(500);
	});
		
});
