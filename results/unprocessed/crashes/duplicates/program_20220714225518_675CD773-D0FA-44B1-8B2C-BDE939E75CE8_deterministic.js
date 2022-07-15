function main() { 
const v1 = [388886811];
let v2 = v1;
const v3 = v2.unshift(v1);
v2 += v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
