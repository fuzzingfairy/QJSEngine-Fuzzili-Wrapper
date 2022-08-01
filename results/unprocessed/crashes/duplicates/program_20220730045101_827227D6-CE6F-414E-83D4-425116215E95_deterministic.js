function main() { 
const v2 = new Uint8ClampedArray();
const v4 = new Uint32Array();
const v6 = [v4];
const v7 = Promise.resolve;
const v8 = Reflect.apply(v7,v2,v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
