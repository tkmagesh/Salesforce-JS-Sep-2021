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

   /*  
   function addAsyncPromiseClient(x,y){
        console.log(`[@client] invoking the service`)
        var p = addAsyncPromise(x,y)
        p.then(function(result){
            console.log(`[@client] result is ${result}`)
        });
    } 
    */

    //using async await with promises
    async function addAsyncPromiseClient(x,y){
        console.log(`[@client] invoking the service`)
        var result = await addAsyncPromise(x,y);
        console.log(`[@client] result is ${result}`)
        return result * 2;
    }

    window['addAsyncPromiseClient'] = addAsyncPromiseClient;


    async function addAsyncPromiseClient2(x,y){
        console.log(`[@client] invoking the service`)
        var result1 = await addAsyncPromise(x,y);
        console.log(`[@client] result1 is ${result1}`)
        var result2 = await addAsyncPromise(1000,2000)
        console.log(`[@client] result2 is ${result2}`)
    }

    window['addAsyncPromiseClient2'] = addAsyncPromiseClient2;

    async function operation1(x,y){
        console.log(`[@client] invoking the service1`)
        var result1 = await addAsyncPromise(x,y);
        console.log(`[@client] result1 is ${result1}`)
    }

    async function operation2(x,y){
        console.log(`[@client] invoking the service1`)
        var result2 = await addAsyncPromise(x,y)
        console.log(`[@client] result2 is ${result2}`)
    }

    function addAsyncPromiseClient3(){   
        operation1(100,200);
        operation2(1000,2000);
    }

    window['addAsyncPromiseClient3'] = addAsyncPromiseClient3;

    /* function addAsyncPromiseClient4(){
        console.log(`[@client] invoking the service1`)
        var p1 =  addAsyncPromise(100,200);
        console.log(`[@client] invoking the service2`)
        var p2 =  addAsyncPromise(1000,2000)
        
        Promise.all([p1, p2])
            .then(function([result1, result2]){
                console.log(`[@client] result1 is ${result1}`)
                console.log(`[@client] result2 is ${result2}`)
            })
    } */
    async function addAsyncPromiseClient4(){
        console.log(`[@client] invoking the service1`)
        var p1 =  addAsyncPromise(100,200);
        console.log(`[@client] invoking the service2`)
        var p2 =  addAsyncPromise(1000,2000)
        
        var allResults =  await Promise.all([p1, p2])
        console.log(`[@client] all results = `, allResults)
    }

    window['addAsyncPromiseClient4'] = addAsyncPromiseClient4;

   
})()

/* 

// followup with another async operation
var p2 = p.then(function(result){
    console.log(`[@client] result = ${result}`);
    return new Promise(function(resolveFn, rejectFn){
        setTimeout(function(){
            var doubleResult = result * 2;
            console.log('done');
            resolveFn(doubleResult)
        }, 5000);
    })
})

//followup with a sync operation
var p3 = p.then(function(result){
    console.log(`[@client] result = ${result}`);
    return new Promise(function(resolveFn, rejectFn){
        var doubleResult = result * 2
        console.log('done');
        resolveFn(doubleResult)
    })
})

//followup with a sync operation (simplified)
var p4 = p.then(function(result){
    console.log(`[@client] result = ${result}`);    
    var doubleResult = result * 2
    console.log('done');
    return doubleResult;
})
*/

//promise chaining
/* 
console.log(`[@client] invoking the service`);
addAsyncPromise(100,200)
    .then(function(result){
        console.log(`[@client] result = ${result}`);
        return result * 2;
    })
    .then(function(doubleResult){
        console.log(`doubleResult = ${doubleResult}`);
    })
*/