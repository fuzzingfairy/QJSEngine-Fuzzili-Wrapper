function main() { 
const v0 = {};
const v1 = [v0,v0];
v1[8] = v1;
function v2(v3,v4,v5) {
    const v6 = v5();
}
for (let v10 = 0; v10 < 20; v10++) {
    const v11 = {"a":v10,"e":v10,"n":v2,"o":v10};
    const v12 = v2(20,v11,v1);
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
