function main() { 
const v0 = {};
const v2 = {};
const v3 = [v2,v2];
const v5 = [v2,v3];
const v6 = Object.setPrototypeOf;
const v7 = Reflect.apply(v6,v0,v5);
const v9 = Math.max(v3);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
