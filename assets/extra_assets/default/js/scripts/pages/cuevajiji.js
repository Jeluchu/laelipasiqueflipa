// CONTACT MAP

var PageContact = function() {

	var _init = function() {

		var mapbg = new GMaps({
			div: '#gmapbg',
			lat: 40.4289783,
			lng: -3.6572502,
			scrollwheel: false,
			zoom: 19, // HAGO ZOOM --> 1: World, 5: Landmass/continent, 10: City, 15: Streets, 20: Buildings
			disableDefaultUI: true //DESHABILITA LOS CONTROLES
		});


		mapbg.addMarker({
			lat: 40.4289783,
			lng: -3.6572502,
			title: 'La Cueva de JiJi',
			infoWindow: {
				content: '<h3>La Cueva de JiJi</h3><p>Calle Ignacio Ellacuría, 8<br>28017, Madrid<br>España</p>'
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
