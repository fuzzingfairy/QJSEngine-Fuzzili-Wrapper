function main() { 
const v0 = {};
const v1 = [v0,v0];
v0.__proto__ = v1;
const v3 = v0.isExtensible();
const v4 = -5.0;
const v5 = v3 | 852215458;
const v6 = Object;
const v7 = 0;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
