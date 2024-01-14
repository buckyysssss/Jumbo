const accountId = 144475
let accountEmail = "Aya@gmail.com"
var accountPassword = "123456"
accountCity = "Jaipur"

let accountState;


// accountId = 2  //not allowed


// Prefer not to use var 
//because of issue in blockscope and functitonalscope
accountEmail = "hls@gmail.com"
accountPassword = "12425"
accountCity = "Delji"

console.log(accountId);

console.table([ accountId, accountEmail, accountPassword, accountCity, accountState]);

