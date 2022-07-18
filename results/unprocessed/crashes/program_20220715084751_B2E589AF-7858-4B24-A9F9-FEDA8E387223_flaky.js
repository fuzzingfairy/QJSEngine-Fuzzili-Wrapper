function main() { 
const v1 = [257,257];
const v3 = [v1,v1,257];
const v4 = v1.unshift;
const v5 = Reflect.apply(v4,v1,v3);
const v7 = [5.0,5.0];
const v8 = v7 < v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
