function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
with (v0) {
    __proto__ = v1;
    const v2 = v0.__proto__;
    const v3 = v2();
}
const v4 = null;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
