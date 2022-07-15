function main() { 
const v1 = {};
const v2 = [2.220446049250313e-16,2.220446049250313e-16,2.220446049250313e-16,2.220446049250313e-16];
const v3 = [v1,v1,v1,2.220446049250313e-16];
const v6 = [v2];
const v7 = Promise.reject;
const v8 = Reflect.apply(v7,v3,v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
