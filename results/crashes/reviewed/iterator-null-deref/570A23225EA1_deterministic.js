function main() { 
const v2 = [1, 1, 1, 1];
const v5 = v2[Symbol.iterator];
const v7 = [1, 1, 1, 1];
// reduce the elements of v7 to a single value using the function provided by v5
const v9 = v7["reduce"](v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
