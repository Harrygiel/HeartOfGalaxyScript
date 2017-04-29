var start = function()
{
	
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	canvas.width = 260;
	canvas.height = 400;

	window.requestAnimFrame = ( function(){ 
		return  window.requestAnimationFrame    ||
		window.webkitRequestAnimationFrame  	||
		window.mozRequestAnimationFrame     	||
		window.oRequestAnimationFrame       	||
		window.msRequestAnimationFrame      	||
		function(callback){
			window.setTimeout(callback, 1000 / 60);
		};
	})();

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
	script.setAttribute("src", "./" + dossier + scripts[index] + ".js"); 
	script.onload = callback; 
	script.type = "text/javascript";

	document.body.appendChild(script); 
}


initScript( "js/", [		
		"init/INIT",			
	], 
	start
);