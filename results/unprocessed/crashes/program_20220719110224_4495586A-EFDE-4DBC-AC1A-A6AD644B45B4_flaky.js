function main() { 
const v1 = [-9007199254740991];
const v2 = [-9007199254740991,-9007199254740991,-9007199254740991];
const v4 = [v2,-9007199254740991,v1];
const v5 = v4.splice;
const v6 = Reflect.apply(v5,v1,v4);
const v7 = v4();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
