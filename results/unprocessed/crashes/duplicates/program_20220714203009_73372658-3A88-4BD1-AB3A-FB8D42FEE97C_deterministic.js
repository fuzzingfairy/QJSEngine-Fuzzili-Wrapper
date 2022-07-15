function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
v0.__proto__ = v1;
const v5 = [65536,65536,65536,65536];
const v6 = [v1,65536,v5,RangeError,v5,150756.40081713162];
const v8 = Math.pow(v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
