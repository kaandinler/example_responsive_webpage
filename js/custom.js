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
				'opacity' : '0',
			});

			$('.navbar-default').css({
				'background-color':'rgba(59,59,59,0)',
			});
		}
		else{
			$('.navbar').css({
				'margin-top':'0px',
				'opacity' : '1'
			});

			$('.navbar-default').css({
				'background-color':'rgba(59,59,59,0.7)',
				'border-color':'#444',
				'border-bottom':'1px solid #444'
			});

			$('.navbar-brand img').css({
				'height':'35px',
				'padding-top':'0px'
			});

			$('navbar-nav > li > a').css({
				'padding-top':'15px',
			});
		}
	});
});



/* smooth page scroll */

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top}, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});





/* activate menu item on click*/
$(document).ready(function(){
	
	'use strict';

	$('.navbar-nav li a').click(function(){
		
		'use strict';

		$('.navbar-nav li a').parent().removeClass('active');

		$(this).parent().addClass('active');

	});
});

/* highlight menu item on scroll*/
$(document).ready(function(){

	'use strict';

	$(window).scroll(function(){

		'use strict';

		$("section").each(function(){

			'use strict';

			var x = $(this).attr("id");
			var y = $(this).outerHeight();
			var grtTop = $(this).offset().top-70;

			if($(window).scrollTop()>grtTop && $(window).scrollTop() < grtTop + y){

				$(".navbar-nav li a[href='#" + x + "']").parent().addClass("active");

			}
			else
			{
				$(".navbar-nav li a[href='#" + x + "']").parent().removeClass("active");
			}

		});

	});

});

/* add auto padding to header */

$(document).ready(function(){

	setInterval(function(){

		var windowHeight = $(window).height();

		var containerHeight = $(".header-container").height();

		var padTop = windowHeight - containerHeight;

		$(".header-container").css({
			'padding-top':Math.round( padTop/2 ) + 'px',
			'padding-bottom':Math.round( padTop/2 ) + 'px'
		});

	},10);

});
/* bxslider */
 $(document).ready(function(){
      $('.slider').bxSlider({
      	slideWidth:300,
      	auto:true,
      	minSlides:1,
      	maxSlides:3,
      	slideMargin:50,
      });

    });

 // counter

 $(document).ready(function(){

 	$('.counter-num').counterUp({
 		delay:10,
 		time:2000
 	});

 });