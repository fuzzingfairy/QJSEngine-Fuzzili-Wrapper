function main() { 
const v1 = [2494720180,2494720180];
const v2 = {};
const v3 = [v2];
v2.__proto__ = v3;
const v4 = `toPrimitive${v2}4294967296${2494720180}bigint${v1}C4bL9NxHZZ${v1}GIe18Fp4qY`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
