const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // This will throw an error: Assignment to constant variable.


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"  //This is declared without var, let, or const.

// This is not good practice.

//In non-strict mode, it becomes a global variable, even if declared inside a function or block.

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])