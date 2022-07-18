function main() { 
const v1 = [1.0,1.0,1.0];
const v3 = Object();
const v5 = [v3];
const v6 = Object.getOwnPropertyNames;
v5[1073741824] >>>= v5;
const v7 = Reflect.apply(v6,v1,v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
