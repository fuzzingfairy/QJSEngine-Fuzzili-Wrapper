function main() { 
const v1 = [6,6,6,6,6];
const v3 = [6,v1,v1,6,v1];
const v4 = v1.unshift;
const v5 = Reflect.apply(v4,v1,v3);
const v6 = delete v1[v1];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
