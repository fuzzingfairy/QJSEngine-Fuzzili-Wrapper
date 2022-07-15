function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
v0.__proto__ = v1;
for (let [v3,...v4] of v1) {
    const v5 = `512${v4}-256${v3}length${"3"}iterator`;
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
