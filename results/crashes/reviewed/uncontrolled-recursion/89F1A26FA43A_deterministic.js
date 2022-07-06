function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
v1[7] = v1;
const v3 = Object();
for (let v4 of v1) {
    v4 &= v3;
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
