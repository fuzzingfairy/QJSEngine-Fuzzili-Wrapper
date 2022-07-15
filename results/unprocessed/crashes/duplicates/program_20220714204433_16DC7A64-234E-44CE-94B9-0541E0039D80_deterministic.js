function main() { 
const v1 = [2.220446049250313e-16,2.220446049250313e-16];
const v3 = [2.220446049250313e-16,2.220446049250313e-16,2.220446049250313e-16,v1,2.220446049250313e-16];
const v4 = v1.push;
const v5 = Reflect.apply(v4,v1,v3);
const v6 = delete v5[v3];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
