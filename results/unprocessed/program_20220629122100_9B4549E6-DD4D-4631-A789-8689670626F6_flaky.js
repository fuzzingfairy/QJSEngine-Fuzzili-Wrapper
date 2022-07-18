function main() { 
const v1 = {};
const v2 = "global" != "global";
const v4 = [v1];
const v5 = [v1,v1,v1,v1];
v1.__proto__ = v5;
const v6 = `message${v4}function${v2}RFtq14p5lj${Reflect}__proto__`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
