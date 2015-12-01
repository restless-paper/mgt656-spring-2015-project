(function() {
    // Define JavaScript for each page variation of this experiment.
	
	var pageVariations = [
		function() {},
		function() {
			$(".donation").html('support');

		}	
	];
	
	$(document).ready(function(){
		var chosenVariation = cxApi.chooseVariation();
		
		pageVariations[chosenVariation]();
		
	});
})();

