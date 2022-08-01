function main() { 
const v2 = [NaN];
const v5 = ["allSettled"];
const v6 = Promise.reject;
const v7 = Reflect.apply(v6,v2,v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
