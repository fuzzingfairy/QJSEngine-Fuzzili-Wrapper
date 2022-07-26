function main() { 
const v0 = ArrayBuffer;
const v1 = {};
const v2 = [v1];
const v3 = 16173;
v1.__proto__ = v2;
const v5 = new Float32Array(v1);
const v6 = {};
const v7 = [v5];
const v8 = "9007199254740993";
const v9 = v7.isConcatSpreadable;
const v10 = v5[v9];
const v12 = Object;
const v13 = Object(v5,v2);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
