function main() { 
const v1 = [9007199254740991];
const v6 = Object();
const v8 = [v6,"4294967297",Object];
const v9 = Promise.race;
const v10 = Reflect.apply(v9,v1,v8);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
