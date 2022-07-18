function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v0.__proto__ = v1;
const v3 = new Uint8ClampedArray();
const v4 = Object;
const v6 = Object();
const v7 = /4\S/mgi;
const v8 = v6 > v0;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
