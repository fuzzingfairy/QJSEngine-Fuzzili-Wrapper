function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
v0.__proto__ = v1;
let v2 = /\d/imgu;
v1.constructor = v1;
let v4 = Object();
let v5 = Object;
({"constructor":v5,"length":v4,"search":v2,} = v1);
const v6 = v5();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
