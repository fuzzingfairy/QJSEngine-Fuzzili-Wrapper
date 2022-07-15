function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v0.__proto__ = v1;
const v3 = Object();
const v5 = Object();
const v7 = new Uint32Array();
const v8 = Object == v1;
const v9 = v0 != v8;
const v10 = Object;
const v11 = Object;
const v13 = Object(Uint32Array,v7);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
