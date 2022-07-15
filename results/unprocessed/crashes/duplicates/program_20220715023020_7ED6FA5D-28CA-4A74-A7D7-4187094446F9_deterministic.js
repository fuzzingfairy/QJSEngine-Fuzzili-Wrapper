function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
with (v0) {
    __proto__ = v1;
}
v1.constructor >>>= v0;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
