function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
v0.__proto__ = v1;
const v2 = v1(v1,v0,v1);
const v3 = v0[v2];
const v4 = 362921.64162425394;
const v5 = {};
const v6 = [v5,v5,v5,v5];
const v7 = 0.0;
const v9 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
