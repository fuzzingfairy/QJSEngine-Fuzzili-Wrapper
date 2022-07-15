function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v1[6] = v1;
for (let v4 = 0; v4 < 6; v4 = v4 + v1) {
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
