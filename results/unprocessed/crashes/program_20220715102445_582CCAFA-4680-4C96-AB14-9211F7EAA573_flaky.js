function main() { 
const v1 = [-2.220446049250313e-16,-2.220446049250313e-16,-2.220446049250313e-16,-2.220446049250313e-16];
const v3 = [v1];
const v4 = v1.fill;
const v5 = Reflect.apply(v4,v1,v3);
const v7 = v5["getUint8"]();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
