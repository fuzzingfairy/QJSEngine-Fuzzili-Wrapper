function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
v0.__proto__ = v1;
const v2 = v0 in v0;
const v3 = {};
const v5 = Object;
const v7 = Object();
const v9 = new Uint8Array(48346);
const v11 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
