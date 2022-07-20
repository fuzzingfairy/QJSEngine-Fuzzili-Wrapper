function main() { 
const v0 = {};
const v1 = [v0,v0];
v0.__proto__ = v1;
const v3 = Object();
const v4 = [v3,...v1,...v1,v3,v1,v3,v3,v0,v3];
const v5 = `65535${v1}function${v0}boolean${v1}ignoreCase${v4}multiline`;
const v8 = Float32Array(42316);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
