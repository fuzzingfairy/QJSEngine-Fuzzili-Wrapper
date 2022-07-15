function main() { 
const v1 = /[\s]/mgi;
const v2 = [2.220446049250313e-16,2.220446049250313e-16,2.220446049250313e-16,2.220446049250313e-16];
const v5 = [Promise,v1,Promise];
const v6 = Promise.all;
const v7 = Reflect.apply(v6,v2,v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
