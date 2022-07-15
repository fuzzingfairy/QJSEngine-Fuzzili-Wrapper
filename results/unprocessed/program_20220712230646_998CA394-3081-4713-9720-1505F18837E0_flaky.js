function main() { 
const v1 = [-9007199254740993,-9007199254740993,-9007199254740993,-9007199254740993,-9007199254740993];
v1[1] = v1;
const v4 = v1["join"](..."join",...v1,-2147483648);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
// Apparently out-of-range date -2326440619-04--9007199254740992
