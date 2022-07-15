function main() { 
const v2 = new Int32Array();
const v3 = [2147483649,2147483649,2147483649,2147483649];
const v6 = new Int16Array();
const v8 = [v2,v6,Promise];
const v9 = Promise.race;
const v10 = Reflect.apply(v9,v3,v8);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
