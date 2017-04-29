var script = new Object();

script.init = function(){
	/*
	console.log(game.id);
	console.dir(planets);
	console.dir(routes);
	console.dir(fleetSchedule);
	*/

	//BRILLIAND VAR
	hub = planetsName.santorini;
	planetsTransportRes = Array(planets.length);
	////////////////////////

	var updateAutoRouteButton = document.createElement("img");
	updateAutoRouteButton.id = "autobuildhub_icon";
	updateAutoRouteButton.class = 'icon';
	updateAutoRouteButton.src = GM_getResourceURL("updateAutoRouteIcon");
	updateAutoRouteButton.height="30px";
	updateAutoRouteButton.width="30px";
	updateAutoRouteButton.style.top="6px";
	updateAutoRouteButton.style.left="120px";
	updateAutoRouteButton.style.cursor="pointer";
	document.getElementById("icon_cont").appendChild(updateAutoRouteButton);

	$("#autobuildhub_icon").click(function() {
        console.log("Updating...");
        //script.UpdateAutoRoute();
        console.log("Updated !");
    });

    $("#autobuildhub_icon").hover(function() {
        (new m(120,
            20, "<span class='blue_text' style='width:100%;text-align:center'>Automaticaly correct<br>HUB routes</span>", "info")).drawInfo();
        $(document).on("mousemove", function(a) {
            mouseX = a.pageX + 16;
            mouseY = a.pageY + 10;
            $("#popup_info").css({
                left: mouseX,
                top: mouseY
            })
        });
        $("#popup_info").css({
            left: mouseX,
            top: mouseY
        })
    }, function() {
        currentPopup.drop()
    });
    $("#autobuildhub_icon").mouseout(function() {
        $(document).on("mousemove", function() {})
    });
}