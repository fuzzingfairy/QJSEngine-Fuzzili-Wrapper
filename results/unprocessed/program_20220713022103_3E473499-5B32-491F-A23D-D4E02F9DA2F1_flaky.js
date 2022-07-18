function main() { 
const v1 = [-1000.0,-1000.0,-1000.0,-1000.0,-1000.0];
const v2 = -1000.0 >> -1000.0;
const v3 = {};
const v4 = [v3,v3];
v3.__proto__ = v4;
const v6 = Object();
const v7 = v3();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
