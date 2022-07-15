function main() { 
const v1 = [10000,10000,10000,10000];
const v4 = [58476,10000,v1,v1,10000,10000];
const v5 = v1.splice;
const v6 = Reflect.apply(v5,v1,v4);
const v8 = Object();
v8[-2147483647] += v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
