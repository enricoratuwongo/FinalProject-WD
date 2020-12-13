//WebDesign
// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/tm-bg-slide-1.JPG", 
	 		 "images/tm-bg-slide-2.JPG",
			 "images/tm-bg-slide-3.JPG"
	 			], 	{duration: 3200, fade: 1300});
		});
})