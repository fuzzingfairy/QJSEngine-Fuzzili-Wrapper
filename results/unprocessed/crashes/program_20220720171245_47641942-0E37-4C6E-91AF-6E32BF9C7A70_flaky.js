function main() { 
const v3 = Object();
const v4 = [112289.17067850311];
v4[0] = v4;
let v6 = [Object,Object,v4];
const v7 = Object.defineProperty;
const v8 = Reflect.apply(v7,v3,v6);
v6 += v8;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
