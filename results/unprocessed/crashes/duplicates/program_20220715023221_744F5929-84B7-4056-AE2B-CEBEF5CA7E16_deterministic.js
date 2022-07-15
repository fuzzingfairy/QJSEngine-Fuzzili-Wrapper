function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v1[0] = v1;
const v3 = "sticky" === "sticky";
const v4 = v3 ? "sticky" : "sticky";
const v5 = v4.lastIndexOf(v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
