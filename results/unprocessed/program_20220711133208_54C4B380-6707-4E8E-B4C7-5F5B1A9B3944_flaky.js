function main() { 
const v1 = [1000000000000.0,1000000000000.0,1000000000000.0,1000000000000.0,1000000000000.0];
const v3 = {};
const v4 = [v3];
const v6 = Object();
const v8 = [v6,v1,v4];
const v9 = Promise.race;
const v10 = Reflect.apply(v9,v4,v8);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
