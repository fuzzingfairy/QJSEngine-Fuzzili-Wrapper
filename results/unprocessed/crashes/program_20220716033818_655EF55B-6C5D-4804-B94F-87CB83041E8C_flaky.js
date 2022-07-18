function main() { 
const v1 = [290589.22724159784,290589.22724159784];
const v2 = {};
const v3 = [v2,v2,v2,v2];
v2.__proto__ = v3;
const v4 = v2 << v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
