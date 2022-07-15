function main() { 
const v1 = [10];
const v3 = [10,10];
v3[2420444649] /= v1;
const v4 = v1.copyWithin;
const v5 = Reflect.apply(v4,v1,v3);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
