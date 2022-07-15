function main() { 
const v1 = [1000000.0,1000000.0,1000000.0,1000000.0];
const v3 = v1["splice"](1000000.0,"splice",v1);
const v4 = [v1,1000000.0,1000000.0];
const v5 = 1000000.0 > v4;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
