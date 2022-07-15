function main() { 
const v0 = {};
let v1 = [v0,v0,v0,v0,v0];
v0.__proto__ = v1;
let v3 = Object();
({"__proto__":v3,"prototype":v1,} = v0);
const v4 = Int16Array;
const v5 = v3.toLocaleString();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
