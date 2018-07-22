// CONTACT MAP

var PageContact = function() {

	var _init = function() {

		var mapbg = new GMaps({
			div: '#gmapbg',
			lat: 40.42549,
			lng: -3.65185,
			scrollwheel: false,
			zoom: 19, // HAGO ZOOM --> 1: World, 5: Landmass/continent, 10: City, 15: Streets, 20: Buildings
			disableDefaultUI: true //DESHABILITA LOS CONTROLES
		});


		mapbg.addMarker({
			lat: 40.42549,
			lng: -3.65185,
			title: 'Las Pilares de la Estética',
			infoWindow: {
				content: '<h3>Las Pilares de la Estética</h3><p>Avda. de Marqués de Corbera, 44<br>28028, Madrid<br>España</p>'
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
