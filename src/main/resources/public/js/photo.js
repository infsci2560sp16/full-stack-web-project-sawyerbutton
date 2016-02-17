$(document).ready(function() {

	waterfall();

	$('.back_top').bind('mouseover', function(event) {
		$(this).removeClass('back_release');
		$(this).addClass('back_hover');
	});

	$('.back_top').bind('mouseout', function(event) {
		$(this).removeClass('back_hover');
		$(this).addClass('back_release');
	});

	$(window).scroll(function() {
		if($(window).scrollTop()>100){
			$('.back_top').fadeIn(500);
		}else{
			$('.back_top').fadeOut(500);
		}
	});

	$('.back_top').bind('click', function() {
		$('body,html').animate({
			scrollTop: 0},
			500);
	});

	$imgs = $('#main').find('img');
	$imgs.each(function(index, el) {
		$(this).bind('mouseover', function(event) {
			$(this).addClass('imgFilter');
		});
		$(this).bind('mouseout', function() {
			$(this).removeClass('imgFilter');
		});
	});

	$('.back_home a').bind('mouseover', function() {
		$(this).find('p').css('color','#ea8010');
		$(this).find('img').attr('src','images/home/back_hover.png')
	});

	$('.back_home a').bind('mouseout', function() {
		$(this).find('p').css('color','#000');
		$(this).find('img').attr('src','images/home/back.png')
	});


});




function waterfall(){
	var $boxs=$('.display>div');
	var w = $boxs.eq(0).outerWidth();
	var cols=Math.floor($('#main').outerWidth()/w);
	$('.display').width(cols*w).css('margin','0 auto');
	var hArr=[];
	$boxs.each(function(index,value){
		var h = $boxs.eq(index).outerHeight();
		if (index<cols) {
			hArr[index]=h;
		}else{
			var minH=Math.min.apply(null,hArr);
			var minHindex = $.inArray(minH,hArr);
			$(value).css({
				position: 'absolute',
				top: minH+'px',
				left:minHindex*w+'px'
			})
			hArr[minHindex]+=$boxs.eq(index).outerHeight();
		}
	})
}