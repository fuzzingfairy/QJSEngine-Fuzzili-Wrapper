function main() { 
const v1 = [-2.0,-2.0,-2.0,-2.0];
const v2 = v1.fill(v1);
const v3 = [v2,v1,-2.0,v2,v2,v2];
const v4 = {};
const v5 = [v4,v4,v4,v4,v4];
const v6 = /t\s?/mi;
const v7 = v5 >>> v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
