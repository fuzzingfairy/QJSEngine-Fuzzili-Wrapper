function main() { 
const v0 = {};
const v1 = [v0,v0];
const v3 = Object();
const v5 = [1000.0,1000.0,1000.0];
const v6 = 4294967296;
const v7 = [1000.0,1000.0];
const v8 = [1000.0,1000.0,1000.0];
v8.valueOf = Object;
const v10 = Object();
v0.__proto__ = v1;
const v12 = Object();
const v13 = v12[v3];
const v15 = Object();
v5[4294967296] %= v0;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
