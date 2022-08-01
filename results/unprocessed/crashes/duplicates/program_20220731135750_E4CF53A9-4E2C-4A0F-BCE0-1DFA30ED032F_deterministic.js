function main() { 
const v2 = [2147483647,2147483647,2147483647,2147483647];
const v4 = [2147483647];
const v5 = "9007199254740993".repeat;
const v6 = Reflect.apply(v5,v2,v4);
const v7 = undefined;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// terminate called after throwing an instance of 'std::bad_alloc'
//   what():  std::bad_alloc
