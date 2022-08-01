function main() { 
const v2 = new Uint32Array(26860);
const v3 = {};
const v4 = [v3];
for (let v8 = 0; v8 < 20; v8++) {
    v2[20] = v4;
    v3.__proto__ = v4;
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
