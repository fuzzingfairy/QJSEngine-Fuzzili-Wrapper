function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
v0.__proto__ = v1;
const v4 = Object;
const v5 = `xorI6yXjuA${v4}dv65ASEGEB${v0}POSITIVE_INFINITY${3.0}bigint`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
