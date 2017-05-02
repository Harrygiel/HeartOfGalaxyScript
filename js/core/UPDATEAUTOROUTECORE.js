function UpdateAutoRouteCore(){
    this.hasAlert = false;
    this.alertList = new Array(); 
    this.hasWarning = false;
    this.warningList = new Array();
    this.hasInfo = false;
    this.uARButton = new UpdateAutoRouteButton(this);
    this.uARUIManager = new UpdateAutoRouteUIManager(this);
}

UpdateAutoRouteCore.prototype.UARButtonPressed = function(event){
    console.log("Reseting old auto routes script states...")
    core = event.data.core;

    console.log("Reseting old auto routes script states...")
    core.ResetState();

    console.log("Reset! Updating routes...");
    core.Update();

    console.log("Updated! Displaying button states...");
    core.uARButton.SetColorState();
    console.log("Displayed!");
}

UpdateAutoRouteCore.prototype.ResetState = function(){

        this.hasAlert = false;
        this.hasWarning = false;
        this.hasInfo = false;
        this.alertList.length = 0;
        this.hasWarning.length = 0;
}

UpdateAutoRouteCore.prototype.Update = function(){
    
    var _this = this;
    var hub = planetsName.santorini;

    var planetsTransportRes = Array(planets.length);
    var cp, i, b;
    
    for(cp = 0; cp < game.planets.length; cp++) {
        var p = game.planets[cp];
        var planet = planets[p];
        var planetProd = Array(resNum).fill(0);
        for(b = 0; b < buildings.length; b++) {
            var building = buildings[b];
            var planetBuilding = planet.structure[b];
            if(!planetBuilding.number || !planetBuilding.active)
                continue;
            var prod = building.rawProduction(planet);
            planetProd.addSet(prod.map(function(v) { return v * planetBuilding.number; }));
        }
        planetsTransportRes[p] = planetProd.map(function(v, k) { return v * -1; });
    }

    fleetSchedule.civisFleet(game.id).filter(function(route) {
        return route.type == "auto" && (route.origin == hub || route.destination == hub);
    }).map(function(route) {
        var routeFor = (route.origin == hub) ? route.destination : route.origin;
        var fleet = fleetSchedule.fleets[route.fleet];
        var a = fleet.autoMap[routeFor], b = fleet.autoMap[hub];
        var travelTime = parseInt(Math.floor(2 * planets[routeFor].shortestPath[hub].distance / (idleBon * fleet.speed())));
        var storage = fleet.maxStorage();
        var resIn = planetsTransportRes[routeFor].map(function(v, k) { if(fleet.autoRes[b] == 0) return 0; return v > 0 ? Math.ceil(v * travelTime) : 0 });
        var resOut = planetsTransportRes[routeFor].map(function(v, k) { if(fleet.autoRes[a] == 0) return 0; return v < 0 ? Math.ceil(-v * travelTime) : 0; });
        var ratioIn = resIn.sum() / storage; if(ratioIn > 1) resIn = reduceResources(resIn, (ratioIn-1)*storage);
        var ratioOut = resOut.sum() / storage; if(ratioOut > 1) resOut = reduceResources(resOut, (ratioOut-1)*storage);
        if(Math.max(ratioIn, ratioOut) > 1) {
            var storageNeeded = (Math.max(ratioIn, ratioOut)-1)*storage;
            //console.log(fleet.name + " for "+ planets[routeFor].name +" needs "+storageNeeded+" more storage");
            _this.hasAlert = true;
            _this.alertList.push([planets[routeFor].name, storageNeeded]);
        }
        fleet.autoRes[a] = resOut;
        fleet.autoRes[b] = resIn;
        return route.fleet_name;
    });
}

UpdateAutoRouteCore.prototype.GetZB50Needed = function(storageNeeded){ // SHOULD BE CALLED IN THE MANAGER
    return Math.floor(storageNeeded/5000000)+1;
}