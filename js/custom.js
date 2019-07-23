// show and hide menu when site opens

$(document).ready(function(){
	'use strict';

	$('.navbar').css({
				
				'opacity' : '0'
			});

	$(window).scroll(function() {
		'use strict';

		if($(window).scrollTop() < 80){
			$('.navbar').css({
				'margin-top':'-100px',
				'opacity' : '0'
			});
		}
		else{
			$('.navbar').css({
				'margin-top':'0px',
				'opacity' : '1'
			});
		}
	});
});
