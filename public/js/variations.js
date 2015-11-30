(function() {
    // Define JavaScript for each page variation of this experiment.
	

	var pageVariations = [
		function() {},  // Original: Do nothing. This will render the default HTML.
		function() {    // Variation 1: add RSVP text
			$( ".event-title" ).prepend( 'RSVP ' );
		}
	];

// Wait for the DOM to load, then execute the view for the chosen variation.
	$(document).ready(function(){
	// Ask Google Analytics which variation to show the user.
		var chosenVariation = cxApi.chooseVariation();
		
		// Execute the chosen view
		pageVariations[1]();
	});
})();




