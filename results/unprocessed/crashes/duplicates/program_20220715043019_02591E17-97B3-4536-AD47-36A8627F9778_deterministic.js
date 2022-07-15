function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
with (v0) {
    __proto__ = v1;
}
const v3 = [v0,v0,-3570980679,-3570980679,v1];
const v4 = [-3570980679,-3570980679,-3570980679,-3570980679,-3570980679];
const v5 = v3 in v4;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
