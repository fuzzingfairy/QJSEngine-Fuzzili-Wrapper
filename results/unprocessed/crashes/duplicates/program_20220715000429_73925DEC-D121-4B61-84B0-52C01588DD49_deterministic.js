function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v0.__proto__ = v1;
const v3 = [569963.5947589613,569963.5947589613,569963.5947589613,v0];
const v5 = Math.atan(v3);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
