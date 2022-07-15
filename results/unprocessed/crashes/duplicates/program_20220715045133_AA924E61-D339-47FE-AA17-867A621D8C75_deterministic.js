function main() { 
const v0 = {};
const v2 = Object();
const v3 = [v0];
const v4 = v0;
v0.__proto__ = v3;
const v5 = `9${v2}5bg8fIzLW1${v4}boolean`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
