function main() { 
const v1 = {};
const v2 = [v1,v1,v1];
const v3 = 611298.8765864156;
v1.__proto__ = v2;
const v4 = Uint8ClampedArray <= v2;
v1.length = 127;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
