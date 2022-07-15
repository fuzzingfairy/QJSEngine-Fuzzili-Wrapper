function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
const v2 = "prototype";
v0.__proto__ = v1;
const v4 = Object();
const v6 = Object();
const v7 = {};
const v8 = [v7,v7,v7,v7];
const v9 = 129;
Object.prototype /= v0;
const v12 = new Int16Array(28840);
const v14 = Object();
const v16 = Object();
const v19 = new Uint8ClampedArray(38336);
const v22 = Object();
const v23 = Object();
function* v24(v25,v26) {
    const v27 = delete v19.length;
    const v28 = yield v23;
    return v28;
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
