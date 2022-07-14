function main() { 
const v0 = {};
const v1 = [v0,v0];
const v3 = Object;
const v4 = [...v1,65535];
v0.__proto__ = v4;
do {
} while (v4 < 1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
