// CONTACT MAP

var PageContact2 = function() {

	var _init = function() {

		var mapbg = GMaps.createPanorama({
			el: '#gmapbg',
			lat: 40.4226736,
			lng: -3.6562838,
			scrollwheel: false,
			disableDefaultUI: true //DESHABILITA LOS CONTROLES

		});
	}

    return {

        init: function() {

            _init();

        }

    };
}();

$(document).ready(function() {
    PageContact2.init();
    $( window ).resize(function() {
		PageContact2.init();
	});
});
