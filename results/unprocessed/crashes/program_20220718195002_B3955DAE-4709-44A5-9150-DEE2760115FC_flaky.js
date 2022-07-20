function main() { 
const v1 = [9007199254740991,9007199254740991,9007199254740991,9007199254740991];
const v2 = [9007199254740991,9007199254740991,9007199254740991];
const v4 = [v2,v1,v2,v1,v2];
const v5 = v2.push;
const v6 = Reflect.apply(v5,v2,v4);
const v7 = +v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
