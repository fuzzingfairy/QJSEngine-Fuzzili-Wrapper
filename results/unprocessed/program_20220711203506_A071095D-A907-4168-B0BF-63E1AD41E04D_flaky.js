function main() { 
const v1 = {};
const v2 = [v1];
const v3 = Object;
v1.__proto__ = v2;
const v5 = Object();
const v6 = v2 > Float32Array;
const v7 = Object;
const v8 = undefined;
const v10 = Object();
const v11 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
