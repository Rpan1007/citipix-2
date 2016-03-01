$(document).ready(function() {
	console.log( "ready!" );

	$( document ).on('submit', function( event ) {
		
		event.preventDefault();

		var city = $('#city-type').val().toUpperCase();
		var imageName = "citipix_skyline";

		console.log(city);

		if (city == "NYC" || city == "NEW YORK" || city == "NEW YORK CITY") {
			imageName = "nyc";
		}
		else if (city == "SF" || city == "SAN FRAN" || city == "SAN FRANCISCO" || city == "BAY AREA") {
			imageName = "sf";
		}
		else if (city == "LA" || city == "LAX" || city == "LOS ANGELESE") {
			imageName = "la";
		}
		else if (city == "ATX" || city == "AUSTIN") {
			imageName = "austin";
		}
		else if (city == "SYD" || city == "SYDNEY") {
			imageName = "sydney";
		}
		
		$('body').css("background", 'url(images/' + imageName + '.jpg)');

	});


});
