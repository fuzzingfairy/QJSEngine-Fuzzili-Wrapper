function main() { 
const v2 = [271690.58711327054,271690.58711327054,271690.58711327054];
v2[0] = v2;
const v4 = {"get":ReferenceError,"set":ReferenceError};
const v6 = Object.defineProperty(v2,-1064359284,v4);
throw v6;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
