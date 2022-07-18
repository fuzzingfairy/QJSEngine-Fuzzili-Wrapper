function main() { 
const v2 = Object();
const v3 = [-805485.9847525457,-805485.9847525457,-805485.9847525457];
v3.length = 1;
v3[2] = v3;
v3[v3] /= -805485.9847525457;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
