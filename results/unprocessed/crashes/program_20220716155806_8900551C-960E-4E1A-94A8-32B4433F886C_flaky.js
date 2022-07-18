function main() { 
const v0 = TypeError;
const v1 = {};
const v2 = [v1,v1,v1,v1];
v1.__proto__ = v2;
v1[v1] = v2;
const v4 = Object();
with (v4) {
    const v7 = Object();
    const v8 = +v1;
}
const v9 = -1000000000000.0;
const v12 = new Uint8ClampedArray(38491);
const v14 = Object();
const v15 = Object;
const v16 = Boolean();
const v17 = null;
const v18 = {};
const v20 = new Proxy(v2,v18);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
