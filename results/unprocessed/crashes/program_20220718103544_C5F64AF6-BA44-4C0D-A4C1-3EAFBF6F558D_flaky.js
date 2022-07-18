function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
const v5 = [v0,v1];
const v6 = Object.setPrototypeOf;
const v7 = Reflect.apply(v6,Object,v5);
const v8 = 848314.5445860862;
const v10 = new Uint8ClampedArray();
const v11 = v10 / v0;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
