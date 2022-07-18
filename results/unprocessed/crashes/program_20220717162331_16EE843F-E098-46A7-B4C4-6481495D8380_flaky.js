function main() { 
const v0 = {};
const v1 = [v0,v0];
const v3 = v1;
v0.__proto__ = v3;
const v5 = Object();
const v7 = [-536870912,-536870912,-536870912,-536870912,Object];
const v8 = v0();
Object[v7] = v7;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
