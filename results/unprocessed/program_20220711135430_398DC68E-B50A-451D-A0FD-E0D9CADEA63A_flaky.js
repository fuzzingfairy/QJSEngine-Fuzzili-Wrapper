function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
v0.__proto__ = v1;
const v2 = v0 ^ v1;
const v3 = "0";
const v5 = Object();
const v7 = Object();
const v8 = {};
const v9 = [v1];
const v10 = "-1";
const v13 = Object();
const v14 = new Float32Array(v9);
const v15 = -1000000.0;
if (Object) {
    const v17 = Object;
    const v19 = Object();
} else {
    const v20 = v0 in v7;
}
const v21 = Object();
const v22 = Object(v13,v0,v21,v14,v21);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
