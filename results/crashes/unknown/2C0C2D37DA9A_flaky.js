function main() { 
const v1 = [1.7976931348623157e+308,1.7976931348623157e+308,1.7976931348623157e+308];
v1[1] = v1;
const v2 = v1.copyWithin(v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR: