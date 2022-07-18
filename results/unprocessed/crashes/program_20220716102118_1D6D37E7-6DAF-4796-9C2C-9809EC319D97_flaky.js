function main() { 
const v1 = {};
const v2 = [v1,"1000",v1];
const v4 = v2["unshift"](v2);
const v5 = v2();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
