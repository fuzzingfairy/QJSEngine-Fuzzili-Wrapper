function main() { 
let v1 = Object;
let v2 = typeof Function;
let v3 = -65535;
const v4 = [v3,v3,v3,v3,v3];
({"a":v3,"prototype":v2,"toString":v1,"toStringTag":v3,"unscopable":v2,} = v1);
const v6 = v4["reduceRight"](v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
