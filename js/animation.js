// console.log('hello world');

$(function(){


	$('#second').hide();
	$('#third').hide();
	$('#fourth').hide();
	$('#fifth').hide();
	$('#sixth').hide();
	$('#seventh').hide();
	$('#eigth').hide();

	$('#first').delay(2000).fadeOut(1000);
	$('#second').delay(3000).fadeIn(1000);

	$('#second').delay(2000).fadeOut(1000);
	$('img').delay(6000).fadeOut(1000);

	$('#third').delay(7000).fadeIn(1000);
	$('#third').delay(3000).fadeOut(1000);

	$('#fourth').delay(12000).fadeIn(1000);
	$('#fifth').delay(12500).fadeIn(1000);
	$('#sixth').delay(13000).fadeIn(1000);

	$('#fourth').delay(3000).fadeOut(1000);
	$('#fifth').delay(3000).fadeOut(1000);
	$('#sixth').delay(3000).fadeOut(1000);


	$('#seventh').delay(18000).fadeIn(1000);
	$('#eigth').delay(19000).fadeIn(1000);

});