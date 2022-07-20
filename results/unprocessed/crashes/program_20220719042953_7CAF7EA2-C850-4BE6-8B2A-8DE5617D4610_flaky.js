function main() { 
const v1 = [Object];
function v2(v3,v4) {
    Object.__proto__ = v1;
}
const v6 = new Promise(v2);
const v8 = Object >= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
