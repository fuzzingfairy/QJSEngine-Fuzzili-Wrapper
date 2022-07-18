function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
const v3 = v0();
v0.length = -9007199254740991;
const v6 = {};
const v7 = [Object];
const v9 = v6();
const v10 = Object.getPrototypeOf(-167242.9371597668,-167242.9371597668,v9);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
