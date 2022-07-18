function main() { 
const v1 = [2147483648,2147483648,2147483648,2147483648,2147483648];
const v2 = v1.unshift(2147483648,2147483648,v1);
const v3 = v1(2147483648,v2,v2,v1);
const v4 = 0;
const v5 = 1;
const v6 = v3(v1,v2);
const v8 = v3 in v1;
const v9 = Object in v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
