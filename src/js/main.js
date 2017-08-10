// require("./lib/social");

$(document).ready(function() {
	var prev_scroll = $(window).scrollTop();
	var scrolly_pos = $('.interactive-container').position().top;
	console.log(scrolly_pos);

$(window).scroll(function() {
	var pos = $(this).scrollTop();
	// var intro_pos = $('.one').offset().top;
	console.log(pos);
	// console.log("first img: " + intro_pos);

	if (prev_scroll < $(window).scrollTop()) {
		console.log("scrolling down");

	if (prev_scroll > scrolly_pos-100 && prev_scroll < scrolly_pos+100) {
		$('.one').addClass("hide");
		$('.two').removeClass("hide");
		$('.img').css({ position: 'fixed',top: '100px' });
	} else if (prev_scroll > scrolly_pos+100 && prev_scroll < scrolly_pos+300) {
		console.log("hi");
		$('.two').addClass("hide");
		$('.three').removeClass("hide");
	} else if (prev_scroll > scrolly_pos+300 && prev_scroll < scrolly_pos+500) {
		console.log("hi");
		$('.three').addClass("hide");
		$('.four').removeClass("hide");
	} else if (prev_scroll > scrolly_pos+500 && prev_scroll < scrolly_pos+700) {
		console.log("hi");
		$('.four').addClass("hide");
		$('.five').removeClass("hide");
	} else if (prev_scroll > scrolly_pos+700 && prev_scroll < scrolly_pos+900) {
		$('.five').addClass("hide");
	}

} else {
	console.log("scrolling up");
	if (prev_scroll < scrolly_pos+900 && prev_scroll > scrolly_pos+700) {
		$('.five').removeClass("hide");
	} else if (prev_scroll < scrolly_pos+700 && prev_scroll > scrolly_pos+500) {
		$('.five').addClass("hide");
		$('.four').removeClass("hide");
	} else if (prev_scroll < scrolly_pos+500 && prev_scroll > scrolly_pos+300) {
		$('.four').addClass("hide");
		$('.three').removeClass("hide");
	} else if (prev_scroll < scrolly_pos+300 && prev_scroll > scrolly_pos+100) {
		$('.three').addClass("hide");
		$('.two').removeClass("hide");
	} else if (prev_scroll < scrolly_pos+100 && prev_scroll > scrolly_pos-100) {
		$('.two').addClass("hide");
		$('.one').removeClass("hide");
		$('.img').css({ position: 'absolute' , top: scrolly_pos.toString() + 'px'});
	}
}
prev_scroll = pos;
})

})


