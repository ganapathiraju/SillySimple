var SILLY = (function(module) {
	module.DoIt = function(resultObject) {
		navigator.geolocation.getCurrentPosition(geoLocationSuccess,
							geoLocationError,
							{timeout:30000});
		resultObject.prepend(Date() + '<br/>');
	};

	function geoLocationSuccess(position){
		resultObject.prepend(position.coords.latitide + postion.coords.longitude + '<br/>');
	};

	function geoLocationError(error){
		resultObject.prepend('error: ' + error.message);
	};

	return module;
}(SILLY || {}));


	