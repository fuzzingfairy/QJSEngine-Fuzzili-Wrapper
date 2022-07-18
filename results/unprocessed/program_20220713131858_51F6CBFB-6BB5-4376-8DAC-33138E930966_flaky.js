function main() { 
const v0 = {};
const v1 = [v0,v0];
v0.__proto__ = v1;
let v2 = 0;
v2 = v0;
do {
} while (v2 < 3);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
