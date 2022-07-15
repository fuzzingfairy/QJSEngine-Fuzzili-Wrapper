function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
const v3 = [4294967297,4294967297,v1,v1];
const v5 = [v3,v1,4294967297];
const v6 = v3.unshift;
const v7 = Reflect.apply(v6,v3,v5);
const v8 = v3();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
