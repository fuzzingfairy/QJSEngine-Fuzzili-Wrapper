function main() { 
const v4 = -1000000000000.0 | Int32Array;
const v5 = new Int32Array(32273);
const v7 = [v4];
const v8 = "symbol".repeat;
const v9 = Reflect.apply(v8,v5,v7);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// terminate called after throwing an instance of 'std::bad_alloc'
//   what():  std::bad_alloc
