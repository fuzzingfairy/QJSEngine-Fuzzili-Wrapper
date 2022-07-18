function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
const v3 = /[\d(Y)?]/ui;
const v4 = ["species"];
const v5 = v3.compile;
const v7 = v4["reduceRight"](v5,v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
