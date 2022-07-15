function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
with (v0) {
    __proto__ = v1;
}
const v2 = {};
const v3 = [v2,v2,v2,v2];
const v4 = `c${v0}-9007199254740993${v1}bigint${v0}I9KTWBf5VV${v3}object`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
