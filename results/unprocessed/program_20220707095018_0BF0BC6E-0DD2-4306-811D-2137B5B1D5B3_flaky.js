function main() { 
const v1 = [-256,-256];
v1[2.0] = v1;
const v4 = [2.0];
const v5 = v1.join;
const v6 = Reflect.apply(v5,v1,v4);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
