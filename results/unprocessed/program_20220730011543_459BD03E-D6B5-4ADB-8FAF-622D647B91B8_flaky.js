function main() { 
const v4 = [2072458738];
const v5 = "freeze".repeat;
const v6 = Reflect.apply(v5,Object,v4);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// terminate called after throwing an instance of 'std::bad_alloc'
//   what():  std::bad_alloc
