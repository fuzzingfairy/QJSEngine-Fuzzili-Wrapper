function main() { 
const v1 = [-1.7976931348623157e+308,-1.7976931348623157e+308];
const v3 = [v1];
const v4 = v1.fill;
const v5 = Reflect.apply(v4,v1,v3);
const v7 = Math.exp(v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
