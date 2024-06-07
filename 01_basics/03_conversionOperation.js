let score = 33

console.log(typeof score);
console.log(typeof(score));

let score1 = "33"

console.log(typeof score1);
console.log(typeof(score1));

let valueInNumber = Number(score1)
console.log(typeof valueInNumber);


let score2 = "33abx"
let valueInNumber1 = Number(score2)
console.log(typeof valueInNumber);
console.log(valueInNumber1);

let score3 = "33"
let valueInNumber2 = Number(score3)
console.log(typeof valueInNumber);
console.log(valueInNumber2)

let score4 = null
console.log(typeof score4)
console.log(typeof(score4))
let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber)
console.log(valueInNumber4)


let score5 = undefined
console.log(typeof score5)
console.log(typeof(score5))
let valueInNumber5 = Number(score5)
console.log(typeof valueInNumber5)
console.log(valueInNumber5)


let score6 = true
console.log(typeof score6)
console.log(typeof(score6))
let valueInNumber6 = Number(score6)
console.log(typeof valueInNumber6)
console.log(valueInNumber6)

let score7 = false
console.log(typeof score7)
console.log(typeof(score7))
let valueInNumber7 = Number(score7)
console.log(typeof valueInNumber7)
console.log(valueInNumber7)

// "33"  => 33
//  "33abc"  => NaN
// true => 1; false => 0.

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let isLoggedIn1 = ""
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1)

let isLoggedIn2 = "Hariom"
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2)

// 1 => TRUE; 0 => false;
// " " => false
// "Hariom " => ture;

let someNumber = 33
let stringNUmber = String(someNumber)
console.log(stringNUmber)
console.log(typeof stringNUmber)
console.log(typeof(stringNUmber))
