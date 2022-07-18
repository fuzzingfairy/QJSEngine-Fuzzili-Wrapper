function main() { 
const v0 = {};
const v1 = [v0];
v1[1] = v1;
v0[v1] = v1;
const v3 = Object();
const v4 = {};
const v6 = Object();
const v8 = Object();
const v10 = Object();
const v11 = [v4,v4,v4,v4];
const v13 = [4.0,4.0,4.0,4.0,4.0];
const v14 = WeakMap;
try {
    const v17 = Object();
    const v18 = delete v17[3930865142];
} catch(v19) {
    v10[3930865142] >>= v19;
}
const v20 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
