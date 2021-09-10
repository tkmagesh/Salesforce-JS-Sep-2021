(() => {
    //sync
    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        const result = x + y;
        console.log(`   [@service] returning result`)
        return result;
    }

    function addSyncClient(x,y){
        console.log(`[@client] invoking the service`)
        const result = addSync(x,y);
        console.log(`[@client] result is ${result}`)
    }

    window['addSyncClient'] = addSyncClient;

    //async using callbacks
    function addAsyncCallback(x,y, callback){
        console.log(`   [@service] processing ${x} and ${y}`)
        setTimeout(function(){
            const result = x + y;
            console.log(`   [@service] returning result`)
            callback(result);
        }, 4000)
    }

    function addAsyncCallbackClient(x,y){
        console.log(`[@client] invoking the service`)
        addAsyncCallback(x,y, function(result){
            console.log(`[@client] result is ${result}`)
        });
    }

    window['addAsyncCallbackClient'] = addAsyncCallbackClient;

    //async using promise
    function addAsyncPromise(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        var p = new Promise(function(resolveFn, rejectFn){
            setTimeout(function(){
                const result = x + y;
                console.log(`   [@service] returning result`)
                resolveFn(result);
            }, 4000);
        });
        return p;
    }

})()