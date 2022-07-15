function main() { 
const v1 = /F\Dm\WCk/yu;
const v2 = [v1,-65537,-65537];
v1.__proto__ = v2;
const v4 = Object();
const v5 = delete v4[v2];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
