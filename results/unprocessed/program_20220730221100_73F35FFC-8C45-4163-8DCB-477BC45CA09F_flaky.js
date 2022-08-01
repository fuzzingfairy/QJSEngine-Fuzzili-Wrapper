function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
for (const v3 in v1) {
    const v5 = Object();
    const v7 = [v3];
    const v8 = Promise.reject;
    const v9 = Reflect.apply(v8,v5,v7);
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
