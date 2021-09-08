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

