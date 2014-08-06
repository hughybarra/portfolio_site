$( document ).ready(function() {
  	// Delete when ready
  	console.log("main.js is loading");

	/*
	The follwing click functions are for click scrolling. When the user clicks on a nav link
	they will scroll to the position of the element as it sits on the page.
	*/

	$('.home_button').click(function(event){
		console.log('home button clicked');

		// grab the pixle position of an element offset from the top of the document.
		elementPosition = $('#section_landing').offset().top;
		// when clicked have the page animate to the above pixle position
		jQuery('html, body').animate({scrollTop:elementPosition}, 'slow');

		// prevent default link behavior
		event.preventDefault();
		return false;
	});
	// end home button click function


	$('.about_button').click(function(event){
		console.log('home button clicked');

		// grab the pixle position of an element offset from the top of the document.
		elementPosition = $('#section_about').offset().top;
		// when clicked have the page animate to the above pixle position
		jQuery('html, body').animate({scrollTop:elementPosition}, 'slow');

		// prevent default link behavior
		event.preventDefault();
		return false;
	});
	// end click function

	$('.contact_button').click(function(event){
		console.log('contact button clicked');

		// grab the pixle position of an element offset from the top of the document.
		elementPosition = $('#section_contact').offset().top;
		// when clicked have the page animate to the above pixle position
		jQuery('html, body').animate({scrollTop:elementPosition}, 'slow');

		// prevent default link behavior
		event.preventDefault();
		return false;
	})

	$('.git_button').click(function(event){
		console.log('git button clicked');

		// grab the pixle position of an element offset from the top of the document.
		elementPosition = $('#section_git').offset().top;
		// when clicked have the page animate to the above pixle position
		jQuery('html, body').animate({scrollTop:elementPosition}, 'slow');

		// prevent default link behavior
		event.preventDefault();
		return false;
	});
	// end click function
	$('.resume_button').click(function(event){
		console.log('resume button clicked');

		// grab the pixle position of an element offset from the top of the document.
		elementPosition = $('#section_resume').offset().top;
		// when clicked have the page animate to the above pixle position
		jQuery('html, body').animate({scrollTop:elementPosition}, 'slow');

		// prevent default link behavior
		event.preventDefault();
		return false;
	});
	// end click function

	$('.projects_button').click(function(event){
		console.log('projects button clicked');

		// grab the pixle position of an element offset from the top of the document.
		elementPosition = $('#section_projects').offset().top;
		// when clicked have the page animate to the above pixle position
		jQuery('html, body').animate({scrollTop:elementPosition}, 'slow');

		// prevent default link behavior
		event.preventDefault();
		return false;
	});
	// end click function
	// end click slider functions
	//===================================================================================

	// get the position of all of the section
	var landing_position 		= $('#section_landing').offset().top;
	var about_position 			= $('#section_about').offset().top;
	var contact_position 		= $('#section_contact').offset().top;
	var git_position 			= $('#section_git').offset().top;
	var resume_position 		= $('#section_resume').offset().top;
	var viewport_width 		= $( window ).width();
	var mobile_view_width 		= 767;

	// check scroll location for background image swapping
	$(window).scroll(function(){



		// declaring vars
		var currentPosition = $(document).scrollTop();


		//resetting current position to zero if it goes negative
		// this will prevent the current position from going into the negative numbers and breaking the page

		if (currentPosition < 0){
			currentPosition = 0;
		}

		// landing page
		if(currentPosition < about_position){
			console.log('default image');

			if (viewport_width > mobile_view_width) {

				// display the larger image
				$('body').css("background-image", "url(media/images/portfolio/bg_1.jpg)");
			}
			else{
				// display the mobile image
			}

			
		}

		if (currentPosition >= about_position && currentPosition < git_position){
			console.log('new image');


			if (viewport_width > mobile_view_width){

				// display the larger image
				$('body').css("background-image", "url(media/images/portfolio/bg_2.jpg)");
			}
			else {
				// display the mobile image
			}
			
		}

		if (currentPosition >= git_position){

			if (viewport_width > mobile_view_width){

				// display the larger image
				$('body').css("background-image", "url(media/images/portfolio/bg_1.jpg)");
			}
			else {
				// display the mobile image
			}
		}
	});/// end window.scroll function
	//===================================================================================

	// click ajax functions
	// git	b Buttons

	// resume button
	$('.big_resume_button').click(function(){
		console.log('resume clicked');
		window.location.href = "https://docs.google.com/document/d/1yeQ1wUwBqoRg4GssNHqj6PfFmvrD3c-_m31Oigyledk/edit?usp=sharing";
	});// end resume click function




});// end doc ready function