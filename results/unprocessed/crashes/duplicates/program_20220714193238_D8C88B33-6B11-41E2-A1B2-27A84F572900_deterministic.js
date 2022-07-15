function main() { 
const v1 = [3.0];
const v2 = {};
const v4 = new Proxy(v1,v2);
const v6 = Object();
v1[8] = v1;
const v7 = v4 <= v6;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
