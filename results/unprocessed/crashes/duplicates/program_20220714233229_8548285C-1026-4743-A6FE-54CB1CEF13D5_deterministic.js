function main() { 
const v1 = [2.220446049250313e-16];
const v2 = {};
const v3 = [v2];
const v5 = [v2,v3];
const v6 = v1.push;
const v7 = Reflect.apply(v6,v3,v5);
const v8 = v3 < v5;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
