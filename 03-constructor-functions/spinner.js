/* 
    we get privacy at the cost of memory
*/
function Spinner() {
    var counter = 0;

    this.increment = function () {
        return ++counter;
    }

    this.decrement = function() {
        return --counter;
    }
}


/* We get memory efficiency at the cost of privacy */
function Spinner() {
    this.__counter__ = 0;
}

Spinner.prototype.increment = function () {
    return ++this.__counter__;
};

Spinner.prototype.decrement = function() {
    return --this.__counter__;
};

var Spinner = (function () {
    var counterSymbol = Symbol('counter')

    function Spinner() {
        this[counterSymbol] = 0;
    }

    Spinner.prototype.increment = function () {
        return ++this[counterSymbol];
    };

    Spinner.prototype.decrement = function() {
        return --this[counterSymbol];
    };

    return Spinner;
})();