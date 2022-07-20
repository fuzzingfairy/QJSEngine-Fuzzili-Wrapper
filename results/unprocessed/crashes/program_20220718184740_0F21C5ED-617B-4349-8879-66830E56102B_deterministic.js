function main() { 
const v1 = [65537,65537,65537];
const v3 = [65537,v1,v1];
const v4 = v1.unshift;
const v5 = Reflect.apply(v4,v1,v3);
v5[v5] += v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
