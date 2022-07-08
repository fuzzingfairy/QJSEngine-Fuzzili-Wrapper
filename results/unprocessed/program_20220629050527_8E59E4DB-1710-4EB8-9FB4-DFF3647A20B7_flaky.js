function main() { 
const v0 = {};
const v2 = [v0,v0,v0];
v0.__proto__ = v2;
for (let [v3,...v4] of `-9007199254740993${v0}256`) {
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
