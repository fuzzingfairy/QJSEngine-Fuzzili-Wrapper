function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
v0.__proto__ = v1;
v1[v1] = v0;
const v3 = [3770618255,v0];
const v4 = [3770618255];
const v6 = Object();
const v8 = Object();
const v10 = Object();
const v12 = [-1000000000000.0,-1000000000000.0,v4];
const v13 = delete v0[-4294967297];
const v15 = Object();
v3[1] = v3;
const v17 = Object();
v3[-4294967297] = v17;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
