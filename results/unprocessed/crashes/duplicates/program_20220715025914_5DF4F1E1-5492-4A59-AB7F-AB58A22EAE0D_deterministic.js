function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1];
v1.__proto__ = v2;
for (let [v3] of "268435456") {
    const v4 = `d${v1}MAX_SAFE_INTEGER${v3}128`;
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
