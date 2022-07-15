function main() { 
const v1 = [3];
v1[3] = v1;
let v5 = Object;
const v6 = v5();
const v7 = [Proxy,v6,Float64Array,v1,3,"object"];
v5 *= v7;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
