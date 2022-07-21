function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
const v2 = {};
const v4 = 4.0;
v2.__proto__ = v0;
const v5 = [v2];
const v7 = [-4172039654,null];
const v8 = [-4172039654];
v2.__proto__ = v5;
const v9 = Object;
const v10 = v5();
const v11 = v2();
const v12 = Uint32Array;
const v13 = v7();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
