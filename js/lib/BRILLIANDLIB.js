Array.prototype.addSet = function(a) {
    for(var i = 0; i < this.length; i++) {
        this[i] += a[i];
    }
    return this;
};
Array.prototype.sum = function() {
    return this.reduce(function(a, b) { return a + b; }, 0);
};
 
function reduceResources(res, reduceBy) {
    var sizes = res.slice().sort(function(a, b) { return a - b; });
    var sum = 0, n = 0, cap;
    while(sizes.length) {
        var v = sizes.pop();
        if(cap >= v)
            break;
        sum += v;
        n++;
        cap = Math.floor((sum - reduceBy) / n);
    }
    return res.map(function(v) { return Math.min(v, cap); });
}
 
var hub;
 
var planetsTransportRes;
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