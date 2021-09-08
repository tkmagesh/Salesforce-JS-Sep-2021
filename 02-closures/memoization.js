var isPrime = (function(){
    var cache = {};
    function isPrime(n){
        if (typeof cache[n] === 'undefined'){
            if (n <= 2){
                cache[n] = true;
            } else {
                console.log('processing ', n);
                cache[n] = true;
                for (var i = 2; i <= (n/2); i++) {
                    if (n % i == 0) {
                        cache[n] = false;
                        break;
                    }
                }
            }
        }
        return cache[n]
    }
    return isPrime;
})();

var isEven = (function(){
    var cache = {};
    function isEven(n){
        if (typeof cache[n] === 'undefined'){
            console.log('processing', n);
            cache[n] = n % 2 == 0;
        }
        return cache[n]
    }
    return isEven;
})();

function memoize(fn){
    var cache = {};
    return function(n){
        if (typeof cache[n] === 'undefined'){
            cache[n] = fn(n);
        }
        return cache[n];
    }
}

var isEven = memoize(function(n){
    console.log('processing ', n);
    return n % 2 == 0;
})

var isPrime = memoize(function(n){
    console.log('processing ', n)
    if (n <= 2){
        return true;
    } else {
        for (var i = 2; i <= (n/2); i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
})

//Assignment
//Generalize the memoize function so that it can memoize 
//functions that take more than one argument.

//The following should work
/* 
var add = memoize(function(x,y){
    return x + y;
}) 
*/