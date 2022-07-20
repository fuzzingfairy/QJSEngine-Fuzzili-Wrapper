function main() { 
let v1 = [this];
this.__proto__ = v1;
const v2 = v1++;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
