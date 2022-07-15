function main() { 
const v0 = /d/mu;
const v2 = [NaN,NaN];
const v3 = v2.__proto__;
const v4 = v2.push(v0,NaN,v3,NaN,v2);
const v5 = v2();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
