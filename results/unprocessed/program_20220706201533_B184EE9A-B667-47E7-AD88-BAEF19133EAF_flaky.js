function main() { 
const v1 = [232377826,232377826];
v1[9] = v1;
const v3 = [232377826,232377826,232377826,232377826,232377826];
const v5 = [Object];
const v6 = v3.sort;
const v7 = Reflect.apply(v6,v1,v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
