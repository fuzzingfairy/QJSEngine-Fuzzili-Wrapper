function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
const v4 = [v0];
v4[268435456] = Reflect;
const v5 = Object.isSealed;
const v6 = Reflect.apply(v5,v1,v4);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
