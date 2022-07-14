function main() { 
const v1 = [1000000000000.0,1000000000000.0,1000000000000.0];
v1[2] = v1;
const v3 = TypeError;
const v5 = [v3];
const v6 = v1.sort;
const v7 = Reflect.apply(v6,v1,v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
