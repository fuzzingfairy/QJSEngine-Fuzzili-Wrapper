function main() { 
const v2 = Object();
const v3 = [7,7];
const v5 = [v3,7];
const v6 = v3.unshift;
const v7 = Reflect.apply(v6,v3,v5);
const v8 = v2[v5];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
