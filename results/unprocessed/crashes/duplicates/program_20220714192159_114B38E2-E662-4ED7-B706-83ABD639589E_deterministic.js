function main() { 
let v2 = [9,9];
const v4 = [-5.0,v2,v2];
const v5 = v2.push;
const v6 = Reflect.apply(v5,v2,v4);
const v7 = v2++;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
