function main() { 
const v1 = [65536,65536,65536];
let v3 = Object();
const v5 = v1["fill"](v1);
v3 /= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
