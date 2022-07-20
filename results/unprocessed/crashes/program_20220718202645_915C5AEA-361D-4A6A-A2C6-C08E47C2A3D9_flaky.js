function main() { 
const v1 = [-1024,-1024];
const v3 = [-1024,-1024,v1,-1024,-1024];
const v4 = v1.splice;
const v5 = Reflect.apply(v4,v1,v3);
const v6 = v3();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
