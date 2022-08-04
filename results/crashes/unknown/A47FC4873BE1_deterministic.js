function main() { 
const v1 = [-65536];
const v3 = [v1];
const v4 = v1.push;
const v5 = Reflect.apply(v4,v1,v3);
const v6 = v3 <= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
