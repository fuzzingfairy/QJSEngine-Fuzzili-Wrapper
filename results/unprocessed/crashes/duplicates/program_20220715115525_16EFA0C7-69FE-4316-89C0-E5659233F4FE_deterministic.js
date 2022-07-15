function main() { 
const v1 = Object();
const v4 = Object();
const v6 = new Float64Array();
const v8 = Object();
const v10 = [v1,v1,v8,v4];
const v11 = Promise.race;
const v12 = Reflect.apply(v11,v6,v10);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
