function main() { 
const v1 = [512,512,512];
const v3 = [v1];
const v4 = v1.unshift;
const v5 = Reflect.apply(v4,v1,v3);
const v6 = {};
const v7 = [v6,v6];
const v8 = v3 in v7;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
