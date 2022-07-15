function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
const v3 = [1801518855,1801518855,1801518855,1801518855,1801518855];
const v7 = [1801518855];
const v8 = `description${0.0}10${0.0}hasInstance${v0}7${v1}4096`.repeat;
const v9 = Reflect.apply(v8,v3,v7);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// terminate called after throwing an instance of 'std::bad_alloc'
//   what():  std::bad_alloc
