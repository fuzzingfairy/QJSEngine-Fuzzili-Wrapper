function main() { 
const v0 = {};
const v1 = [v0];
const v3 = 4096;
v0.__proto__ = v1;
const v5 = -3531019602 === v1;
const v6 = v5 ? -3531019602 : v1;
const v8 = new Uint8Array(28258);
const v9 = 28258;
const v11 = Object();
let v12 = 0;
do {
    Object.prototype >>= v1;
    const v14 = v12++;
} while (v12 < 7);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
