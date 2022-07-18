function main() { 
const v2 = [-2.220446049250313e-16,-2.220446049250313e-16];
const v4 = Object();
const v8 = [Promise,Object,v2,"object"];
const v9 = Promise.race;
const v10 = Reflect.apply(v9,v4,v8);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
