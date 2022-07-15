function main() { 
const v1 = [-1000.0,-1000.0,-1000.0,-1000.0,-1000.0];
for (const v3 of v1) {
    const v5 = [v3];
    const v6 = Promise.reject;
    const v7 = Reflect.apply(v6,v1,v5);
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
