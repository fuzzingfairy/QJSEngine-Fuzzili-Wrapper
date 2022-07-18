function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
let [,,v2,v3] = v1;
v2.__proto__ = v1;
const v4 = Int32Array;
do {
} while (0 < v2);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
