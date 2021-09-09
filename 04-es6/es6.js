/* 
Features
    1. let
    2. const
    3. Array destructuring
*/

//var => is NOT block scoped

//01. let
for(let i=0; i<10; i++){
}

//02. const
const PI = 3.14;

//03. Array destructuring
var nos = [3,1,4,2,5]
var [x, y] = nos
[x,y] = [y,x]

//04. Rest operator (Array)
var [x,y, ...z] = nos

//05. Spread operator (Array)
var newNos = [ ...nos, 10, 20, 30 ]
function add(x,y){
    return x + y;
}
add(...nos)


//06. Object destructuring
var emp = {
    id : 100,
    name : 'Magesh',
    salary : 10000
}

var { salary, id } = emp
var { salary : x, id : y } = emp

//07. Rest operator (Object)
var { id : x, ...z } = emp

//08. Spread operator (Object)
var newEmp = { ...emp, city : 'Bengaluru' }

var emp = {
    id : 100,
    name : 'Magesh',
    salary : 10000,
    org : {
        name : 'Salesforce',
        city : 'Bengaluru'
    }
}

var { id :x, org : { name, city} } = emp

//09. Object construction enhancement
var id = 101, name = 'Pen', cost = 10
var product = { id , name , cost  }

//10. function arguments enhancements

//11. default arguments
function add(x = 10,y = 20){
    return x + y;
}

//12. Arrow functions
/*
//function statement
function add(x,y){
    return x + y;
}

//function expression
var add = function(x,y){
    return x + y;
}

//arrow function
var add = (x,y) => {
    return x + y;
}
*/

var add = (x,y) => x + y;

//13. Template strings
var x = 10, y = 20
var s2 = `Sum of ${x} and ${y} is ${x+y}`

var s3 = `Sum of
    ${x} and ${y} 
    is ${x+y}`

//14. iterators

var nos = [10,20,30,40]

for(let no of nos)
    console.log(no)

//OR
var iter = nos[Symbol.iterator]()
iter.next()
iter.next()

//custom iterators
var fibonacci = {
    [Symbol.iterator] : function(){
        var pre = 0, cur = 1
        return {
            next : function(){
                var temp = pre
                pre = cur
                cur += temp
                return {
                    value : temp,
                    done : false
                }
            }
        }
    }
}

var fibIter = fibonacci[Symbol.iterator]()
fibIter.next()
fibIter.next()
