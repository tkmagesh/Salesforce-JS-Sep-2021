function sum(){
    function parseArg(n){
        if (typeof n === 'function') return parseArg(n());
        if (Array.isArray(n)) {
            var result = 0;
            for (var index = 0; index < n.length; index++) {
                result += parseArg(n[index]);
            }
            return result;
        }
        return isNaN(n) ? 0 : parseInt(n);
    }
    var result = 0;
    for(var index = 0; index < arguments.length; index++){
        result += parseArg(arguments[index]);
    }
    return result;
}