$(
    function(){
        /* ========================================================================= */
	/*	Magnific popup
	/* =========================================================================  */
	$('.image-popup').magnificPopup({
		type: 'image',
		removalDelay: 160, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function () {
				// just a hack that adds mfp-anim class to markup
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		closeOnContentClick: true,
		midClick: true,
		fixedContentPos: false,
		fixedBgPos: true
	});

	/* ========================================================================= */
	/*	Post image slider
	/* ========================================================================= */
	
	$("#post-thumb, #gallery-post").slick({
		infinite: true,
		arrows:false,
		autoplay: true,
  		autoplaySpeed: 4000
		
	});
	
	$("#features").slick({
		infinite: true,
		arrows:false,
		autoplay: true,
  		autoplaySpeed: 4000
	});

	/* ========================================================================= */
	/*	Portfolio Filtering Hook
	/* =========================================================================  */

	var mixer;
	try{
		mixer = mixitup('.portfolio-items-wrapper');
	}catch(ex){}
	 
	
	/* ========================================================================= */
	/*	Testimonial Carousel
	/* =========================================================================  */
 
	//Init the carousel
	try{
		$("#testimonials").slick({
			infinite: true,
			arrows:false,
			autoplay: true,
			  autoplaySpeed: 4000
		});
	}catch(ex){}
	
    }
);