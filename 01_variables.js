const accountId = 123456    // not allowed to change at any cost
let accountEmail = "aditya@google.com"
var accountPassword = "333333"
accountcity = "barh"
let accountState;    //will be considered undefined

 //accountId = 2 //not allowed

accountEmail = "aj@aj.com"
accountPassword = "21212121"
accountcity = "padova"
 
console.log(accountId);

/*
prefer not to use var because of issue in block scopre and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountcity,accountState])  //better then just console.log