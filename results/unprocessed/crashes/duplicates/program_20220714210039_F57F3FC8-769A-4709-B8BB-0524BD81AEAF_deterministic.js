function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
const v3 = Object();
const v5 = new Uint8ClampedArray();
const v9 = [v5,Symbol,v3,Object,Promise];
const v10 = Promise.race;
const v11 = Reflect.apply(v10,v1,v9);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
