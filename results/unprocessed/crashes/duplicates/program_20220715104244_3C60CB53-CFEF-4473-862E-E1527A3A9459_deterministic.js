function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
const v3 = [-1024,-1024,v0,-1024];
const v4 = /(\dE\wDD\W*)/u;
const v5 = [v1,...v3,v0,-1024,v4];
v0.__proto__ = v1;
const v7 = Symbol.toPrimitive;
v5[v0] = v7;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
