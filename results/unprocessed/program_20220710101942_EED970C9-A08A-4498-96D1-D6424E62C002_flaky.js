function main() { 
const v1 = [1.7976931348623157e+308,1.7976931348623157e+308,1.7976931348623157e+308];
const v3 = v1.fill;
const v4 = Reflect.apply(v3,v1,Reflect);
const v5 = v4();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
