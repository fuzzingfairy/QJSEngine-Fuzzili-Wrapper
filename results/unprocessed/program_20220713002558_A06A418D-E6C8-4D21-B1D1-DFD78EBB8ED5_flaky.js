function main() { 
const v0 = {};
const v1 = [v0,v0];
v0.__proto__ = v1;
const v2 = v0();
let [v3,v4,...v5] = v1;
const v6 = Object;
const v7 = v0();
const v9 = Object();
const v11 = Object();
const v12 = -65535;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
