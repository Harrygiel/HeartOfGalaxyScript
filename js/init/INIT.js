var script = new Object();

script.init = function(){
	/*
	console.log(game.id);
	console.dir(planets);
	console.dir(routes);
	console.dir(fleetSchedule);
	*/
	console.log(document.title);
	hub = planetsName.santorini;
    planetsTransportRes = Array(planets.length);
	
	updateAutoRouteButton.init();
}