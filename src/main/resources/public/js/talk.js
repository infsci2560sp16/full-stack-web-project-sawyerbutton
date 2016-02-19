$(document).ready(function() {

	talkshow();

	$('.back_home a').bind('mouseover', function() {
		$(this).find('p').css('color','#ea8010');
		$(this).find('img').attr('src','images/home/back_hover.png');
	});

	$('.back_home a').bind('mouseout', function() {
		$(this).find('p').css('color','#000');
		$(this).find('img').attr('src','images/home/back.png');
	});

	$('#talk_btn').bind('mouseover', function() {
		$(this).removeClass('btn_relese');
		$(this).addClass('btn_hover');
	});

	$('#talk_btn').bind('mouseout', function() {
		$(this).removeClass('btn_hover');
		$(this).addClass('btn_relese');
	});

	$('#talk_btn').bind('click', function(event) {

		var content_new = $('<div class=\"talk_unit\"></div>');
		var content_o=$('.talk_txt').val();
		var imga = $('<div class="unit_img"><div>').appendTo(content_new);
		var imgb = $('<img src="images/talk/me.png" alt="">').appendTo(imga);
		var contenta = $('<div class="unit_content"></div>').appendTo(content_new);
		var contentb = $('<span>'+content_o+'</span>').appendTo(contenta);
		content_new.css({
			opacity: 0
		});
		$('.talk_show').prepend(content_new);
		
		movetalk(content_new);
		

	});

	

});

function talkshow(){
	$content_new  = $('.talk_show').find('.talk_unit');
	var top_new=0;
	for (var i = 1; i < $content_new.length; i++) {
		top_new +=  $content_new.eq(i-1).find('.unit_content').outerHeight()+10;
		$content_new.eq(i).css({
			top: top_new
		});
	}
}

function movetalk(content){
	var num =content.find('.unit_content').outerHeight()+10;
	$content_new  = $('.talk_show').find('.talk_unit');
	for (var i = 1; i < $content_new.length; i++) {
		$content_new.eq(i).animate({
			top: "+="+num},
			500);
	}

	content.animate({
		opacity: 1},
		1000);
}