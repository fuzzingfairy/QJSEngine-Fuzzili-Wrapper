function main() { 
const v1 = [9007199254740991,9007199254740991,9007199254740991];
const v3 = [v1];
const v4 = v1.fill;
const v5 = Reflect.apply(v4,v1,v3);
let v6 = "function";
v6 >>= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
