function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
function v2(v3,v4) {
}
const v5 = {"has":v2,"setPrototypeOf":v2};
const v7 = new Proxy(v1,v5);
for (let v11 = 0; v11 < 20; v11++) {
    v5.__proto__ = v7;
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
