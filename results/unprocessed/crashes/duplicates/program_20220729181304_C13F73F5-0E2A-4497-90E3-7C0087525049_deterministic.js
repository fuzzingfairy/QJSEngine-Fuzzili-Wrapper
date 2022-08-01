function main() { 
const v1 = [-1.0];
v1[2] = v1;
for (let v5 = 0; v5 < 5; v5++) {
    const v6 = v5 << v1;
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
