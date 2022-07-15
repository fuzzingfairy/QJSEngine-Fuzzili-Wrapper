function main() { 
const v0 = {};
const v1 = [v0,v0];
v0.__proto__ = v1;
const v3 = v1.splice(2147483648);
const v4 = delete v3[v1];
const v6 = {"set":2147483649};
const v8 = Object.defineProperty(v0,2147483649,v6);
const v9 = [2147483648];
const v11 = Array;
const v12 = [-181973.39925766992,-181973.39925766992,-181973.39925766992,-181973.39925766992,-181973.39925766992];
const v14 = Object();
const v16 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
