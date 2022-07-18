function main() { 
const v0 = {};
const v2 = Object();
const v3 = [v0,v0,v0];
const v5 = Object();
const v7 = Object();
v0.__proto__ = v3;
Object[4294967295] /= v0;
const v10 = v0["cos"](...v3,v2,v0,...v3);
const v11 = [1000000000.0,1000000000.0];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
