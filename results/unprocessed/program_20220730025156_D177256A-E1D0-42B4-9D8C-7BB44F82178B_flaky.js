function main() { 
const v2 = {};
const v3 = [v2,v2,v2];
const v5 = [1900916032];
const v6 = "unscopable".repeat;
const v7 = Reflect.apply(v6,v3,v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// terminate called after throwing an instance of 'std::bad_alloc'
//   what():  std::bad_alloc
