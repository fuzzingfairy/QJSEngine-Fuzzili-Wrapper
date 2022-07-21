function main() { 
const v1 = [2069716596,2069716596,2069716596,2069716596];
const v4 = [2069716596];
const v5 = "object".repeat;
const v6 = Reflect.apply(v5,v1,v4);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// terminate called after throwing an instance of 'std::bad_alloc'
//   what():  std::bad_alloc
