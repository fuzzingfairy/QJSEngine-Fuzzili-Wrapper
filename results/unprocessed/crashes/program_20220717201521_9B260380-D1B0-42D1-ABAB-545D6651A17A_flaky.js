function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
v0.__proto__ = v1;
const v4 = new Uint32Array(v0,Uint32Array,574183.9972766493,Uint32Array);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
