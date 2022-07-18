function main() { 
const v1 = [65535];
v1[6] = v1;
const v2 = [65535];
const v4 = [65535,v2,65535,65535];
const v5 = "splice";
const v7 = Object();
const v8 = ReferenceError();
v7[294401847] *= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
