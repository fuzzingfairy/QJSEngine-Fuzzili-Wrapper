function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1,v1];
v1.__proto__ = v2;
function v3(v4) {
}
function v5(v6,v7) {
    v3 = v6;
}
const v9 = new Promise(v5);
const v11 = [-2820010282,4294967297];
const v12 = [4294967297,4294967297,4294967297,4294967297,4294967297];
const v13 = v2();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
