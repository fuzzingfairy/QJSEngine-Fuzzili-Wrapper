function main() { 
const v0 = {};
const v1 = [v0];
const v2 = {};
const v3 = [v2,v2];
for (let v4 of v1) {
    ({"constructor":v4,"length":v4,"valueOf":v4,} = v3);
    const v6 = v1["reduce"](v4,...v3);
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
