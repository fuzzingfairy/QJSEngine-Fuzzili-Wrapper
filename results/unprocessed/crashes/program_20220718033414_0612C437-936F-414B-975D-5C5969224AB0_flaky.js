function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
v0.__proto__ = v1;
const v3 = {};
const v4 = delete v0[Object];
const v5 = [v3,v1];
const v6 = {};
const v7 = [v6];
const v8 = Object;
let [v9,v10] = v7;
const v12 = v1["flatMap"]();
const v13 = 2.0;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
