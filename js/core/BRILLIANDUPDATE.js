script.UpdateAutoRoute = function(){
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
        if(Math.max(ratioIn, ratioOut) > 1) console.log(fleet.name+" needs "+(Math.max(ratioIn, ratioOut)-1)*storage+" more storage");
        fleet.autoRes[a] = resOut;
        fleet.autoRes[b] = resIn;
        return route.fleet_name;
    });
}