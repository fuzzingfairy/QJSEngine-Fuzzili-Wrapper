function main() { 
const v1 = Object();
const v4 = Object();
const v8 = [v4,Object,Object];
const v9 = Promise.all;
const v10 = Reflect.apply(v9,v1,v8);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
