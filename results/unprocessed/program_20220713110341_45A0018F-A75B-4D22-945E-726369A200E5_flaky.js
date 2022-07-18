function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
const v3 = [-4294967296,-4294967296,-4294967296,-4294967296,-4294967296];
v0.__proto__ = v1;
const v4 = v0.__proto__;
const v5 = v4 % v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
