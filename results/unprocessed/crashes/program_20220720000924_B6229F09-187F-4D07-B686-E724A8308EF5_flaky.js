function main() { 
const v1 = [65536,65536,65536,65536,65536];
const v2 = [65536,65536,65536,65536,65536];
const v3 = v2.fill(v1);
v1[0] = v1;
let [v4,v5] = v2;
const v6 = v4();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
