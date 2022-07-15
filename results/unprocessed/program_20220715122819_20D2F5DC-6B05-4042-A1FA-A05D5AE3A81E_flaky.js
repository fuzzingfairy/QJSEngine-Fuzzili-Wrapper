function main() { 
const v0 = {};
const v1 = [v0];
const v2 = v1.__proto__;
v0.__proto__ = v2;
with (v0) {
    length = v0;
    const v4 = isFinite(v0);
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
