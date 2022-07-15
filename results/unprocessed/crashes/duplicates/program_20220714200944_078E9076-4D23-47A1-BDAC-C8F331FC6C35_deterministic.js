function main() { 
const v1 = [1.7976931348623157e+308,1.7976931348623157e+308,1.7976931348623157e+308,1.7976931348623157e+308];
v1[2] = v1;
const v3 = v1 <= "symbol";
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
