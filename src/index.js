/*console.log("Hello JavaScript from Abdurrahman Adebomehin")

console.log(4 * 6)

var a = 10
var b = 20

console.log(a+b)*/

//Let us create our own logger function
/*var logger = function (a,  b, c) {
    let d = (a + b) *c 
    console.log(d)
}

var product = 4 * 5

logger(1,3,9)*/

/*import logger, {appName, dummyFunction, genericFunction, multiplier} from "./tools.js";
// classnote: logger is default. that's why it not in curly braces

//logger("pau")
// classnote: you can import your default function as anything you like. Dr Pius called his log
//var product = 4*8
//logger(product)
logger(`Welcome! The application name is "${appName}". There is
a function that returns "${dummyFunction()}".`);

// classnote: to embed variables dynamically inside a string. you use ` at the beginning and the end

logger(genericFunction() ) 

try {
    logger(multiplier())
}catch(error){
    logger (error.message)
} */

/*import logger, {CustomMath} from './tools.js';
//import with curly bracket if not default export
import { Person } from './person.js';

const person1 = new Person("Gbenga", "Daniel", "Male", 1.7)

const person2 = new Person("John", "Obidi", "Male", 2.0)

const person3 = new Person("Cynthia", "Smith", "Female", 1.5)

logger(`The persons declared so far are:
1. ${person1.firstName}
2. ${person2.firstName}
3. ${person3.firstName}
`)

logger(CustomMath.sqrt(200))
*/

import logger from './tools.js'
const addressees = ["John Uzo", "Mary Smart", "Paul Umoh"]; //array with elements
addressees.map(addressee => {
    let message = `Dear ${addressee}, 
It is my pleasure to inform you that your admission letter is ready for collection`;
    logger(message);
});