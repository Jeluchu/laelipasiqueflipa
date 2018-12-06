// CONTACT MAP

var PageContact = function() {

	var _init = function() {

		var mapbg = new GMaps({
			div: '#gmapbg',
			lat: 40.431264,
			lng: -3.642612,
			scrollwheel: false,
			zoom: 19, // HAGO ZOOM --> 1: World, 5: Landmass/continent, 10: City, 15: Streets, 20: Buildings
			disableDefaultUI: true //DESHABILITA LOS CONTROLES
		});


		mapbg.addMarker({
			lat: 40.431264,
			lng: -3.642612,
			title: 'Kumon Ascao',
			infoWindow: {
				content: '<h3>KUMON ASCAO</h3><p>C/Carolina Coronado, 37<br>28017, Madrid<br>España</p>'
			}
		});
	}

    return {
        //main function to initiate the module
        init: function() {

            _init();

        }

    };
}();

$(document).ready(function() {
    PageContact.init();
    $( window ).resize(function() {
		PageContact.init();
	});
});
