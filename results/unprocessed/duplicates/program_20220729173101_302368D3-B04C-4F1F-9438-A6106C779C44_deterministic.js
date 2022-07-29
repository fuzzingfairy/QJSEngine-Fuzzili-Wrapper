function main() { 
const v4 = [1335201549,"slice"];
const v5 = "slice".padEnd;
const v6 = Reflect.apply(v5,Object,v4);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// terminate called after throwing an instance of 'std::bad_alloc'
//   what():  std::bad_alloc
