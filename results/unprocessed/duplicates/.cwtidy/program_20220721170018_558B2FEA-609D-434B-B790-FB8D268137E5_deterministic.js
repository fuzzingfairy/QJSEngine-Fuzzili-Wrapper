function main() { 
const v1 = [1.7976931348623157e+308];
const v4 = Object();
const v6 = [v4,v1,Object];
const v7 = Promise.race;
const v8 = Reflect.apply(v7,v1,v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR: