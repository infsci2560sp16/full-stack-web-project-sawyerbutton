$(document).ready(function() {

	var w_height = $(window).height();
	$sections  = $('#container').find('.section');
	$bars = $('#menu').find('li');
	$(window).scroll(function() {
		if($(window).scrollTop()>w_height){
			$('#me_header').addClass('header_transparent');
		}else{
			$('#me_header').removeClass('header_transparent');
		}

		for (var i = 0; i < 4; i++) {
			$bars.eq(i).find('a').removeClass('current');
		}

		if (($(window).scrollTop()>w_height-200) && ($(window).scrollTop()<w_height*2)) {
			$bars.eq(1).find('a').addClass('current');
		}
		else if($(window).scrollTop()>2*w_height-200 && $(window).scrollTop()<w_height*3){
			$bars.eq(2).find('a').addClass('current');
		}
		else if( $(window).scrollTop()>3*w_height-200 && $(window).scrollTop()<w_height*4){
			$bars.eq(3).find('a').addClass('current');
		}
		else if($(window).scrollTop()<w_height){
			$bars.eq(0).find('a').addClass('current');
		}

	});


	$bars.each(function(index, el) {
		$(this).bind('click', function(event) {
			scroll= w_height*index;
			$('body,html').animate({
				scrollTop:scroll},
				500);
			event.stopPropagation(); 
		});
	});

	$('.me_right').bind('mouseover', function(event) {
		$(this).find('img').attr('src','images/me/drop_hover.png');
	});

	$('.me_right').bind('mouseout', function(event) {
		$(this).find('img').attr('src','images/me/drop_relese.png');
	});

	$('.me_right').bind('click',function(event){
		$('.siderbar').animate({
			right: 0},
			500);
		event.stopPropagation();
	});

	$(document).bind('click',function(event) {
		$('.siderbar').animate({
			right: -200},
			500);
	});

	$('.siderbar dt').each(function(index, el) {
		$(this).bind('mouseover', function(event) {
			$(this).addClass('dt_hover');
		});

		$(this).bind('mouseout', function(event) {
			$(this).removeClass('dt_hover');
		});
	});

	$('.section0_line').animate({
		width: 1000},
		3000);


	$('.section2_buttom ul').find('.active').each(function(index, el) {
		$(this).bind('mouseover', function(event) {
			event.stopPropagation();
			$(this).parent().find('.abbr_img').animate({
				opacity: 1},
				100);
			$(this).removeClass('section2_buttom_release');
			$(this).addClass('section2_buttom_hover');
		});

		$(this).bind('mouseout', function(event) {
			event.stopPropagation();
			$(this).parent().find('.abbr_img').animate({
				opacity: 0},
				100);
			$(this).addClass('section2_buttom_release');
			$(this).removeClass('section2_buttom_hover');
		});

		$(this).bind('click', function(event) {
			var src = $(this).parent().find('.abbr_img').find('img').attr("src");
			$('.section2_img').find('img').animate({
				opacity: 0},
				500, function() {
				$('.section2_img').find('img').attr({
					src:src,
					alt:index
				});

				$('.section2_img').find('img').animate({
					opacity: 1},
					500);
			});
			
		});

	});


	$('.section2_right').bind('mouseover', function(event) {
		$(this).animate({
			opacity: 1,},
			200);
	});

	$('.section2_right').bind('mouseout', function(event) {
		$(this).animate({
			opacity: 0,},
			200);
	});


	$('.section2_left').bind('mouseover', function(event) {
		$(this).animate({
			opacity: 1,},
			200);
	});

	$('.section2_left').bind('mouseout', function(event) {
		$(this).animate({
			opacity: 0,},
			200);
	});

	$('.section2_left').bind('click', function(event) {
		var num = $('.section2_img').find('img').attr('alt');
		if(num===0){
			num=3;
		}else{
			num= parseInt(num)-1;
		}
		var src = 'images/me/'+num+".jpg";
		$('.section2_img').find('img').animate({
				opacity: 0},
				500, function() {
				$('.section2_img').find('img').attr({
					src:src,
					alt:num
				});

				$('.section2_img').find('img').animate({
					opacity: 1},
					500);
			});
	});


$('.section2_right').bind('click', function(event) {
		var num = $('.section2_img').find('img').attr('alt');
		if(num==3){
			num=0;
		}else{
			num = parseInt(num)+1;
		}
		var src = 'images/me/'+num+".jpg";
		$('.section2_img').find('img').animate({
				opacity: 0},
				500, function() {
				$('.section2_img').find('img').attr({
					src:src,
					alt:num
				});

				$('.section2_img').find('img').animate({
					opacity: 1},
					500);
			});
	});




});






