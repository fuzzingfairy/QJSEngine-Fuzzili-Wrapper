function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1];
const v3 = 3704175841;
const v4 = Float32Array;
v1.__proto__ = v2;
const v6 = Object();
const v7 = {};
v6[Object] = v7;
const v8 = [v7];
const v10 = Object();
const v12 = Object();
const v13 = isFinite(v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
