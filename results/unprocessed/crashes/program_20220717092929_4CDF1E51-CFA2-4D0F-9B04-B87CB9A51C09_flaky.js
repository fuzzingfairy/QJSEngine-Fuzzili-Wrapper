function main() { 
const v1 = Object();
function v2(v3) {
}
let v4 = v2;
function v5(v6,v7) {
    v4 = v7;
}
const v9 = new Promise(v5);
v9.__proto__ = v1;
const v10 = v4(v9);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
