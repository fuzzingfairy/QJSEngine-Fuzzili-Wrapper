function main() { 
const v2 = {};
const v3 = [v2];
v2.__proto__ = v3;
const v4 = `-2147483648${-4007557908}description${Object}-65536${v2}PAeNGGFdVh`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
