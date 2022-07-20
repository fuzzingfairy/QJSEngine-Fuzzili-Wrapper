function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
for (let v5 = 0; v5 < 9; v5++) {
    const v6 = v0 < v5;
    v0.__proto__ = v1;
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
