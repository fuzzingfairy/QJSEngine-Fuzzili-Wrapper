function main() { 
const v1 = [1.0];
const v3 = [v1,1.0];
const v4 = v1.push;
const v5 = Reflect.apply(v4,v1,v3);
const v6 = v3 < v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
