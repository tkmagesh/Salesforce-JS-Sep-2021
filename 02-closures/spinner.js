var spinner = (function (){
    var counter = 0;
    
    function increment(){
        return ++counter;
    }
    function decrement(){ 
        return --counter; 
    }
    return {
        increment: increment,
        decrement: decrement
    }
})()