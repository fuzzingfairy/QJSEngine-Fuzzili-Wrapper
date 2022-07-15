function main() { 
const v1 = [-1000000000000.0];
const v3 = [-1000000000000.0,-1000000000000.0,v1,-1000000000000.0,-1000000000000.0];
const v4 = v3.unshift;
const v5 = Reflect.apply(v4,v1,v3);
const v6 = v3();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
