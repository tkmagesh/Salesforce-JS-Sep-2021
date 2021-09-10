function doWork(){
    for(var i=0; i<10000; i++){
        for(var j=0; j<10000; j++){
            for(var k=0; k<300; k++){

            }
        }
    }
}

self.addEventListener('message', function(evt){
    if (evt.data === 'start'){
        doWork();
        self.postMessage('done');
    }
})