﻿load.loading = function() // Liste des images à charger
{
	var liste = new Array();

	liste["buttons"] = new Array();
	liste["sprites"] = new Array();
	liste["BGs"] = new Array();
	console.log("[SCRIPT] Image list created");
	load.preload(liste);
}