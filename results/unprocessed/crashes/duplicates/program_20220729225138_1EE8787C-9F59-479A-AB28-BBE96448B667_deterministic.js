function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
function v2(v3,v4,v5,v6) {
}
const v7 = {"getOwnPropertyDescriptor":v2};
const v9 = new Proxy(v1,v7);
for (let v13 = 0; v13 < 20; v13++) {
    v7.__proto__ = v9;
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
