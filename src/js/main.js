// require("./lib/social");

$(document).ready(function() {
	var prev_scroll = $(window).scrollTop();

$(window).scroll(function() {
	var pos = $(this).scrollTop();
	// var intro_pos = $('.one').offset().top;
	console.log(pos);
	// console.log("first img: " + intro_pos);

	if (prev_scroll < $(window).scrollTop()) {
		console.log("scrolling down");

	if (prev_scroll > 200 && prev_scroll < 400) {
		$('.one').addClass("hide");
		$('.two').removeClass("hide");
	} else if (prev_scroll > 400 && prev_scroll < 600) {
		console.log("hi");
		$('.two').addClass("hide");
		$('.three').removeClass("hide");
	} else if (prev_scroll > 600 && prev_scroll < 800) {
		console.log("hi");
		$('.three').addClass("hide");
		$('.four').removeClass("hide");
	} else if (prev_scroll > 800 && prev_scroll < 1000) {
		console.log("hi");
		$('.four').addClass("hide");
		$('.five').removeClass("hide");
	} else if (prev_scroll > 1000 && prev_scroll < 1200) {
		$('.five').addClass("hide");
	}

} else {
	console.log("scrolling up");
	if (prev_scroll < 1200 && prev_scroll > 800) {
		$('.five').removeClass("hide");
	} else if (prev_scroll < 800 && prev_scroll > 600) {
		$('.five').addClass("hide");
		$('.four').removeClass("hide");
	} else if (prev_scroll < 600 && prev_scroll > 400) {
		$('.four').addClass("hide");
		$('.three').removeClass("hide");
	} else if (prev_scroll < 400 && prev_scroll > 200) {
		$('.three').addClass("hide");
		$('.two').removeClass("hide");
	} else if (prev_scroll < 200 && prev_scroll > 0) {
		$('.two').addClass("hide");
		$('.one').removeClass("hide");
	}
}
prev_scroll = pos;
})

})


