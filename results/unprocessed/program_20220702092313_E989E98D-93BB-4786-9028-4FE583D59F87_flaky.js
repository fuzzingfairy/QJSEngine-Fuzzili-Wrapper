function main() { 
const v1 = Object;
const v2 = Object;
const v3 = [Infinity,Infinity,Infinity,Infinity,Infinity];
const v6 = Object;
const v7 = Object;
const v9 = [v3];
const v10 = Object.isExtensible;
v9.length = 268435456;
const v12 = Reflect.apply(v10,Object,v9);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
