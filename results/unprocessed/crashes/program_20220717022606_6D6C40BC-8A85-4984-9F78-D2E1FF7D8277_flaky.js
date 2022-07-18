function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v0.__proto__ = v1;
let v2 = {};
v2 += v0;
const v4 = Object();
const v5 = [v2,v2];
const v7 = [497913.21949655074,497913.21949655074,497913.21949655074,497913.21949655074];
const v9 = Object();
const v10 = Object;
let v11 = Object;
const v12 = 65535;
v11 = v0;
const v13 = v11();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
