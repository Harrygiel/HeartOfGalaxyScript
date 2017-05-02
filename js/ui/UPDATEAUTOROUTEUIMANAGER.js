function UpdateAutoRouteUIManager(core){
	var _this = this;
    this.core = core;
    this.planetARDivList = new Array();
    this.isPARDivListUpdated = false;
    $("#b_fleet_icon").click(function(){
    	if(_this.isPARDivListUpdated == false){
    		_this.isPARDivListUpdated = true;
    		setTimeout(function(){
    			_this.planetARDivList = _this.GetPlanetARDivList();
    		}, 300);
    	}
    	_this.SetPlanetARDivAlertState();
    });
}

UpdateAutoRouteUIManager.prototype.GetPlanetARDivList = function(){//NOTHING RETURNED IF THE MENU IS NOT OPEN
	var planetARDivList = new Array();
	var liName;
	console.log("Getting owned planets list");
	for (var i = 0; i < planets.length; i++) {

		liName = "#autoroutesov_" + i + "_button";
		if ($(liName).length) {
		    $(liName).css({
		    	'transition': 'background 0.5s linear'
        	})
			planetARDivList.push([$(liName).find("span").text(), i, liName]);
		}
	}
	return planetARDivList;
};

UpdateAutoRouteUIManager.prototype.SetPlanetARDivAlertState = function(){
	for (var i = 0; i < this.planetARDivList.length; i++) {
		this.UpdatePlanetUIAlertState(this.planetARDivList[i][2], false); //planetTargeted, isOnAlert

		for (var j = 0; j < this.core.alertList.length; j++) {

			if(this.core.alertList[j][0].localeCompare(this.planetARDivList[i][0]) == 0){
				this.UpdatePlanetUIAlertState(this.planetARDivList[i][2], true, this.core.alertList[j][1]);//planetTargeted, isOnAlert, storageNeeded
				break;
			}
		}
	}
}

UpdateAutoRouteUIManager.prototype.UpdatePlanetUIAlertState = function(planetDiv, isOnAlert, storageNeeded){
	if(isOnAlert){
		$(planetDiv).css({
		    'background-color': 'rgba(255,0,0,0.2)' //red
		})
		$(planetDiv).hover(function() {
        (new m(250,
            20, "<span class='blue_text' style='width:100%;text-align:center'>" + Math.floor(storageNeeded/1000000) + "M more storage needed. Buy and add " + Math.floor(storageNeeded/5000000) + " more ZB50 to the road</span>", "info")).drawInfo();
        $(document).on("mousemove", function(a) {
            mouseX = a.pageX;
            mouseY = a.pageY + 20;
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
	}
	else{
		$(planetDiv).css({
		    'background-color': 'rgba(255,0,0,0)' //none
		})
		$(planetDiv).hover(function() {});
	}
}
UpdateAutoRouteUIManager.prototype.GetPlanetsWithAlert = function(){
	var planetsWithAlertList = new Array();

	console.log(this.core.alertList.length, this.planetARDivList.length);
	for (var i = 0; i < this.core.alertList.length; i++) {
		for (var j = 0; j < this.planetARDivList.length; j++) {
			if(this.core.alertList[i][0].localeCompare(this.planetARDivList[j][0]) == 0){
				planetsWithAlertList.push([this.planetARDivList[j], this.core.alertList[i][1]].reduce(function(a, b) {return a.concat(b);}));
				break;
			}
		}
	}
	return planetsWithAlertList;
}