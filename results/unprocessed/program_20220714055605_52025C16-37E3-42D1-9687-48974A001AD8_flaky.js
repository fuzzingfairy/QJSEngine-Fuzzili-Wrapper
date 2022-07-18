function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1,v1];
let v3 = 0;
do {
    v1.__proto__ = v2;
    const v5 = v3++;
} while (v3 < 10);
Object[-624078013] &= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
