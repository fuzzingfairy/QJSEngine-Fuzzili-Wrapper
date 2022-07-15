function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
const v2 = /.\W/imuy;
with (v0) {
    __proto__ = v1;
    v0.__proto__ /= v2;
}
const v5 = Object(1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
