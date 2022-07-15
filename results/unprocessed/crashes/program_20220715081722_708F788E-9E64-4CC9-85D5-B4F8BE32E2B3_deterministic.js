function main() { 
const v1 = [2.220446049250313e-16,2.220446049250313e-16];
const v2 = delete v1[v1];
const v4 = [v1];
const v5 = v1.fill;
const v6 = Reflect.apply(v5,v1,v4);
const v8 = `NaN${-2753454476}function${v2}boolean${v1}bigint${v5}object`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
