// Minimizing 27ADB8A9-6649-46A6-A99B-1D9BAF7ADEC0
function main() { 
const v1 = [1000000000000.0];
for (let v5 = 0; v5 < 100; v5++) {
    const v6 = {};
    const v8 = new Proxy(v1,v6);
    v1.__proto__ = v8;
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
