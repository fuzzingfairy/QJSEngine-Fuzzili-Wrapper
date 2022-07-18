function main() { 
const v2 = [Math,-536870912];
Math.__proto__ = v2;
let [v3,v4,,v5] = v2;
const v6 = v3();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
