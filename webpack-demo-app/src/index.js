/* 
import * as calculator from './calculator.js'
console.log(calculator.add(100,200))
console.log(calculator.subtract(100,200)) 
*/

import {add, subtract, isEven} from './calculator.js'
(() => {
    console.log('hello World!');
    for(let i =0; i < 10; i++){
        console.log(add(100,200 + i))
        console.log(subtract(100 + i,200))
        console.log(isEven(100 + i))
    }

    class Employee{
        id = 0
    }
    let emp = new Employee()
    console.log(emp.id)
})()