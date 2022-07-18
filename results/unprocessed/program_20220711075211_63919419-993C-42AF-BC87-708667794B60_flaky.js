function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v0.__proto__ = v1;
v1[v0] &= v1;
const v2 = {};
const v3 = [v2,v2,v2,v2,v2];
const v4 = -5.0;
const v5 = 188407.92990218895;
const v6 = -891782925;
const v8 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
