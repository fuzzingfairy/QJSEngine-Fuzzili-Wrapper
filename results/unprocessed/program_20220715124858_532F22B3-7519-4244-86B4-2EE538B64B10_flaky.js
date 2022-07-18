function main() { 
const v1 = [1000000000000.0,1000000000000.0];
const v3 = Object();
const v5 = [v1,1000000000000.0,v3,Object,v3];
const v6 = v1.unshift;
const v7 = Reflect.apply(v6,v1,v5);
const v8 = delete v6[v1];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
