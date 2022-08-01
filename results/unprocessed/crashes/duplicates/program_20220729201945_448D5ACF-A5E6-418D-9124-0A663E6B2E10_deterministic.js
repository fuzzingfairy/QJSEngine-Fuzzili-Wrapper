function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
const v2 = {};
function v3(v4,v5,v6) {
    const v7 = {};
    const v8 = [v7,v7,v7];
    const v9 = [v5,v8,v7,v3];
    let v10 = Object;
    v10 <<= v9;
}
const v11 = v3(v2,v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
