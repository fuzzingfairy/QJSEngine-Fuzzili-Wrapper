function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
const v2 = 8;
with (v0) {
    __proto__ = v1;
}
const v3 = "3";
const v5 = v0 % Object;
const v6 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
