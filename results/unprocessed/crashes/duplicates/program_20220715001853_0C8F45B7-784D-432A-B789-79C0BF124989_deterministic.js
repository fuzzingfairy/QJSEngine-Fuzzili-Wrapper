function main() { 
const v2 = Object();
const v4 = new Uint8ClampedArray();
const v6 = [Promise,v2];
const v7 = Promise.race;
const v8 = Reflect.apply(v7,v4,v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
