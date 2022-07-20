function main() { 
const v1 = [628590970];
const v3 = [v1,628590970,v1,v1,v1];
const v4 = v1.unshift;
const v5 = Reflect.apply(v4,v1,v3);
const v6 = v3.join();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
