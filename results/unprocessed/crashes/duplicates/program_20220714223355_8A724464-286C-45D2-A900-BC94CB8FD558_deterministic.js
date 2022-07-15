function main() { 
const v1 = [-4096,-4096,-4096,-4096,-4096];
const v2 = {};
const v4 = [v2,v2,v2];
const v6 = [v4];
const v7 = Promise.race;
const v8 = Reflect.apply(v7,v1,v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
