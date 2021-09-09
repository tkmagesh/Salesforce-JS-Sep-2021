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