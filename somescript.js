(function($){
$(document).ready(function(){
// LEFT COLUMN:
	// When the collapse button is clicked:
	$('.collapseLeft').click(function() {
		//$('.collapseLeft').css("display","none");
		$('.expandLeft').css("display","block");
		$('#leftCol').css("height","20px");
		$.cookie('leftCol', 'collapsed');
	});
	// When the expand button is clicked:
	$('.expandLeft').click(function() {
		$('.expandLeft').css("display","none");
		$('.collapseLeft').css("display","block");
		$('#leftCol').css("height","201px");
		$.cookie('leftCol', 'expanded');
	});
    // RIGHT COLUMN:
	// When the collapse button is clicked:
	$('.collapseRight').click(function() { alert('right');
		$('.collapseRight').css("display","none");
		$('.expandRight').css("display","block");
		$('#rightCol').css("height","20px");
		$.cookie('rightCol', 'collapsed');
	});
	// When the expand button is clicked:
	$('.expandRight').click(function() { alert('right2');
		$('.expandRight').css("display","none");
		$('.collapseRight').css("display","block");
		$('#rightCol').css("height","201px");
		$.cookie('rightCol', 'expanded');
	});
   //COOKIES
	// Left column state
	var leftCol = $.cookie('leftCol');
	// Right column state
	var rightCol = $.cookie('rightCol');
	// Set the user's selection for the left column
	if (leftCol == 'collapsed') {
		//$('.collapseLeft').css("display","none");
		$('.expandLeft').css("display","block");
		$('#leftCol').css("height","20px");
	};

	// Set the user's selection for the right column
	if (rightCol == 'collapsed') {
		$('.collapseRight').css("display","none");
		$('.expandRight').css("display","block");
		$('#rightCol').css("height","20px");
      };
});
})(jQuery);
