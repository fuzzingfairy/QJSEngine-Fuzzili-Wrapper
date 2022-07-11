function main() { 
const v1 = [2690192075];
const v2 = v1.unshift(v1);
const v3 = {"__proto__":v1};
v3.__proto__ += false;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
