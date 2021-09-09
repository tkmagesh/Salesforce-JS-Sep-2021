var products = [
    {id : 7, name : 'Pen', cost : 40, units : 30, category : 'stationary'},
    {id : 2, name : 'Ten', cost : 70, units : 20, category : 'grocery'},
    {id : 9, name : 'Den', cost : 20, units : 40, category : 'stationary'},
    {id : 4, name : 'Len', cost : 60, units : 50, category : 'stationary'},
    {id : 5, name : 'Zen', cost : 50, units : 30, category : 'grocery'}
]

//forEach

//imperative
for(let product of products){
    console.log(product.name, product.category)
}


//declarative
products.forEach(function(product){
    console.log(product.name, product.category)
})

products.forEach(product => console.log(product.name, product.category))

products.forEach(({name, category}) => console.log(name, category))

//filter
//filtering stationary products

//imperative
var stationaryProducts = []
for(var product of products){
    if (product.category === 'stationary'){
        stationaryProducts.push(product)
    }
}

//declarative
function negate(predicate){
    return function(...args){
        return !predicate(...args)
    }
}
var stationaryProductPredicate = product => product.category === 'stationary';
var stationaryProducts = products.filter(stationaryProductPredicate);
var nonStationaryProducts = products.filter(negate(stationaryProductPredicate));

//map
//transform one list of values into another list of values
var productWithCost = products.map(product => ({name : product.name, cost : product.cost}))

var productWithCost = products.map(({name, cost}) => ({name , cost}))

//reduce
//accumulate a value from a list of values

var nos = [3,1,4,2,5]
var sum = nos.reduce((x,y) => x + y)

var nos = [3,1,4,2,5]
var sum = nos.reduce((x,y) => {
    console.log(x, y);
    return x + y;
}, 0)

/* 
group the products by their category
*/
var productByCategory = products.reduce((result, product) => {
    result[product.category] = result[product.category] || []
    result[product.category].push(product)
    return result;
},{})

function after(count, fn){
    return function(...args){
        if (--count <=0 ){
            return fn(...args);
        }
    }
}