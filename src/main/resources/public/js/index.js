$(document).ready(function() {
	var w_height= $(window).height();
	var w_width = $(window).width();

	$('.left_tit').animate({
		left: 300,
		opacity: 1},
		1500);

	$('.right_tit').animate({
		left: 400,
		opacity: 1},
		1500,function(){
			$('.head_img').animate({
				opacity: 1},
				1000);
			$('.knowme').animate({
				opacity: 1},
				1000);
		});

	$('.knowme a').bind('mouseover',function(){
		$('.knowme p').css({
			color: '#ea8010'
		});
		$('.knowme img').attr('src','images/index/go_hover.png');
	})

	$('.knowme a').bind('mouseout',function(){
		$('.knowme p').css({
			color: '#fff'
		});
		$('.knowme img').attr('src','images/index/go.png');
	})

	$('.control_left').bind('mouseover', function(event) {
		$('.control_left img').attr('src','images/index/control_left_none.png');
	});

	$('.control_left').bind('mouseout', function(event) {
		$('.control_left img').attr('src','images/index/control_left.png');
	});

	$('.control_right').bind('mouseover', function(event) {
		$('.control_right img').attr('src','images/index/control_right_none.png');
	});

	$('.control_right').bind('mouseout', function(event) {
		$('.control_right img').attr('src','images/index/control_right.png');
	});

	$('.control_left').bind('click', function(event) {
		var num = $('.bg img').attr('alt');
		if (num==1) {
			num=4;
		}else{
			num = num -1;
		}
		var src = "images/bg/bg"+num+".jpg";

		$('.bg').animate({
			opacity: 0},
			500, function() {
			$('.bg img').attr({
			 	'src':src,
			 	'alt':num
			 })

			$('.bg').css({
				opacity: 0
			});

			$('.bg').animate({
				opacity: 1},
				500);
		});
	});

    $('.control_right').bind('click', function(event) {
		var num = $('.bg img').attr('alt');
		if (num==4) {
			num=1;
		}else{
			num = parseInt(num) +1;
		}
		var src = "images/bg/bg"+num+".jpg";
		$('.bg').animate({
			opacity: 0},
			500, function() {
			$('.bg img').attr({
			 	'src':src,
			 	'alt':num
			 })

			$('.bg').css({
				opacity: 0
			});

			$('.bg').animate({
				opacity: 1},
				500);
		});
	});


});