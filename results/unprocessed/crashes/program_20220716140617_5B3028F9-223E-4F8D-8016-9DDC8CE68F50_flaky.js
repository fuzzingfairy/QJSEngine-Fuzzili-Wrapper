function main() { 
const v1 = [65537,65537,65537,65537];
const v3 = [v1,65537,v1,v1,65537];
const v4 = v1.unshift;
const v5 = Reflect.apply(v4,v1,v3);
const v6 = Reflect & v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
