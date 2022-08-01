function main() { 
const v3 = Object();
const v4 = v3.__proto__;
const v8 = [Object,Object,Symbol];
const v9 = Promise.race;
const v10 = Reflect.apply(v9,v4,v8);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
