var load = {};
var img = new Array(); 
load.nbImage = 0; 
load.nbLoaded = 0; 
load.isLoading = new Array();

load.preload = function(liste) 
{
	console.log("[SCRIPT] Image list loading...");
	for ( var type in liste ) 
	{
		if (liste.hasOwnProperty(type)) {
			load.nbImage += liste[type].length; 
			img[type] = new Array(); 

			for ( var i in liste[type] ) 
			{
				if (liste[type].hasOwnProperty(i)) {
					var link = liste[type][i]; 
					img[type][link] = new Image(); 
					img[type][link].src = "https://rawgit.com/Harrygiel/HeartOfGalaxyScript/img/" + type + "/" + link + ".png"; 

					var tmp = i + load.nbImage - liste[type].length;
					img[type][link].id = tmp;
					load.isLoading[tmp] = { type : type, lien : link };

					img[type][link].onload = function() 
					{
						
						load.nbLoaded++; 
						if ( load.nbLoaded == load.nbImage ) 
						{
							console.log("[SCRIPT] image loaded !");
							liste = 0;
							game.init(); 
						}
					}
				}
			}
		}
	}

	if ( load.nbImage == 0) { 
		console.log("[SCRIPT] no image to load");
		liste = 0;
		game.init();
	} 
}