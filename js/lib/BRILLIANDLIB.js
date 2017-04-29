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