var script = new Object();
script.init = function(){
	console.log("[SCRIPT] Waiting the game initialisation...");
	var waitGameInit = setInterval(function() {
		//if (document.getElementById('gameiframe').contentWindow.document.getElementById('div#popup.menu') != null) {
		//  console.log("[SCRIPT] Game Initalized!");
		  script.printShipList();
		  script.printPlanetsList();
		//  clearInterval(waitGameInit);
		//}
	}, 1000);
}

script.printShipList = function(){
	console.dir(game.ships);
}

script.printPlanetsList = function(){
	console.dir(game.planets);
}