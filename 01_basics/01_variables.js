const accountId = 144553
let accountEmail = "Hariom@gmail.com"
var accountPassword = "12345"
acoounCity = "Varansi"

let accountState;


// accountId = 2 // not allowed.
console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and fuctional scope.
*/

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengluru"

console.table([accountEmail, accountId,accountState, accountCity, accountPassword])