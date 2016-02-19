$(document).ready(function() {
	var path='images/home/';
	$('.info1').animate({
		top: 20,
		opacity: 1},
		1000, function() {
		$('.info1').animate({
			top: 0},
			200);
		$('.info_content1').animate({
			height: 300},
			800);
		$('.info2').animate({
			top: 20,
			opacity: 1},
			1000, function() {
			$('.info2').animate({
				top: 0},
				200);
			$('.info_content2').animate({
				height: 300},
				800);
			$('.info3').animate({
				top: 20,
				opacity: 1},
				1000, function() {
				$('.info3').animate({
					top: 0},
					200);
				$('.info_content3').animate({
					height: 300},
					800);
			});
		});
	});

	$('.info1 a').bind('mouseover', function(event) {
		$('.info1 img').attr('src',path+'me_hover.png');
	});

	$('.info1 a').bind('mouseout', function(event) {
		$('.info1 img').attr('src',path+'me.png');
	});

	$('.info2 a').bind('mouseover', function(event) {
		$('.info2 img').attr('src',path+'photo_hover.png');
	});

	$('.info2 a').bind('mouseout', function(event) {
		$('.info2 img').attr('src',path+'photo.png');
	});

	$('.info3 a').bind('mouseover', function(event) {
		$('.info3 img').attr('src',path+'talk_hover.png');
	});

	$('.info3 a').bind('mouseout', function(event) {
		$('.info3 img').attr('src',path+'talk.png');
	});

	$('.back_index a').bind('mouseover', function() {
		$(this).find('p').css('color','#ea8010');
		$(this).find('img').attr('src',path+'back_hover.png');
	});

	$('.back_index a').bind('mouseout', function() {
		$(this).find('p').css('color','#000');
		$(this).find('img').attr('src',path+'back.png');
	});


});