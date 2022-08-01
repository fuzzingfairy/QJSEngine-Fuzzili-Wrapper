function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
function v2(v3,v4) {
    const v5 = v4 >>> v2;
}
const v7 = v2(0,v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
