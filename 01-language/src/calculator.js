function sum(){
    function parseArg(n){
        if (typeof n === 'function') return parseArg(n());
        if (Array.isArray(n)) return sum.apply(this, n);
        return isNaN(n) ? 0 : parseInt(n);
    }
    return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + sum([].slice.call(arguments, 1));
    /* 
        var parsed = [].map.call(arguments, parseArg);
        return parsed.reduce((x,y) => x + y, 0) 
    */
    /* 
        [].map.call(arguments, parseArg).reduce((x,y) => x + y, 0); 
    */
}