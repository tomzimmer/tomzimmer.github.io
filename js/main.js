// Blur-up Image Loader:
	$("#header-img").load(function() {
	  $('.header-l1').addClass('header-l1-2');
	}).attr('src', 'img/seasideHD.jpg');

//Icon Fade on Scroll:
	$(window).scroll(function () {
		$('.fa-arrow-circle-down').fadeOut();
	});

//Waypoints - Device Animation
	var animTime = 250;
	$("#waypoint1").waypoint(function() {
	   $("#device1").animate({width:'show'},animTime);
	   setTimeout( function () {
	   		$("#device2").animate({width:'show'},animTime);
	   }, animTime);
	   setTimeout( function () {
	   		$("#device3").animate({width:'show'},animTime);
	   }, 2*animTime);
	   setTimeout( function () {
	   		$("#device4").animate({width:'show'},animTime);
	   }, 3*animTime);
	   }, {offset: '50%', triggerOnce: true});

//Waypoints - Text Fade
	$("#waypoint2").waypoint(function() {
	   $('.aboutme').fadeTo("slow", 1);
	   }, {offset: '50%', triggerOnce: true});

//Moon effect
$("#waypoint3").waypoint(function() {
   $('.text-inner h2').fadeTo(1000, 1);
   }, {offset: '40%', triggerOnce: true});

//Butterscroll
$(function () {
    	$('#butter1').butterScroll({
    		speed: 900,
    	});
    });
