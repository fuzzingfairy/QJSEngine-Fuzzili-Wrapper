function main() { 
const v1 = [5.0,5.0];
const v3 = [v1,v1];
const v4 = v1.unshift;
const v5 = Reflect.apply(v4,v1,v3);
v1[v1] **= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
