function getPrimeFinder(){
    var cache = {};
    function isPrime(n){
        console.log('processing - ', n);
        if (n <= 3) return true;
        for(var i=2; i <= (n/2); i++)
            if (n % i === 0) return false;
        return true;
    }
    return function(n){
        if (!cache.hasOwnProperty(n))
            cache[n] = isPrime(n);
        return cache[n];
    }
}

function getSquareFinder(){
    var cache = {};
    function square(n){
        console.log('processing - ', n);
        return n * n;
    }
    return function(n){
        if (!cache.hasOwnProperty(n))
            cache[n] = square(n);
        return cache[n];
    }
}

function memoize(fn){
    var cache = {};
    return function(n){
        if (!cache.hasOwnProperty(n))
            cache[n] = fn(n);
        return cache[n];
    }
}

function add(x,y){
    console.log("processing ", x , " and ", y);
    return x + y;
}

function memoize(fn){
    var cache = {};
    return function(){
        var key = JSON.stringify(arguments);
        if (!cache.hasOwnProperty(key))
            cache[key] = fn.apply(this, arguments);
        return cache[key];
    }
}
