function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1,v1];
v1.__proto__ = v2;
v1[v1] = Error;
const v3 = Uint32Array;
const v4 = Object;
const v5 = Object;
const v7 = [-61175.47178482567,-61175.47178482567,-61175.47178482567];
const v8 = 3744057283;
const v10 = Object[576260315];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
