var start = function()
{
	console.log("[SCRIPT] Script loaded !");
	load.loading(); 
}

function initScript(dossier, scripts, init) 
{
	var scriptsDone = 0; 
	var callback = function() 
	{
		scriptsDone++;
		if ( scriptsDone == scripts.length ) 
		{
			init(); 
		}
		else
		{
			callScript(dossier, scripts, scriptsDone, callback);
		}
	}

	callScript(dossier, scripts, scriptsDone, callback);
}

function callScript(dossier, scripts, index, callback)
{
	var script = document.createElement("script"); 
	
	script.id = scripts[index];
	script.setAttribute("src", "https://rawgit.com/Harrygiel/HeartOfGalaxyScript/" + dossier + scripts[index] + ".js"); 
	script.onload = callback; 
	script.type = "text/javascript";

	document.body.appendChild(script); 
}


initScript( "js/", [
		"init/PRELOAD",
		"init/LOADING",		
		"init/INIT",	
	], 
	start
);