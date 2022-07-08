function main() { 
const v1 = {};
const v2 = [v1,v1];
v1.__proto__ = v2;
for (const v3 of "prototype") {
    const v4 = Object;
    const v5 = v3 >= v1;
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
