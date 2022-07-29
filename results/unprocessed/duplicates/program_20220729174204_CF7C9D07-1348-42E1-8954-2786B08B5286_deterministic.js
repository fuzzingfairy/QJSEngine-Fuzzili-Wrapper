function main() { 
const v3 = new Uint32Array(53194);
const v5 = [53194];
const v6 = "global".repeat;
const v7 = Reflect.apply(v6,v3,v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// terminate called after throwing an instance of 'std::bad_alloc'
//   what():  std::bad_alloc
