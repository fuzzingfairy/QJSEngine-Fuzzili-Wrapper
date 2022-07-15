function main() { 
const v1 = [3.0];
v1[v1] = v1;
const v3 = [3.0,v1];
const v4 = v1.indexOf;
const v5 = Reflect.apply(v4,v1,v3);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
