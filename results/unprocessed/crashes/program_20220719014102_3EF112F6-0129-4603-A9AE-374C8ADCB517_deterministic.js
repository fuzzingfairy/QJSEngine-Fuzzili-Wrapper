function main() { 
const v1 = [-609515.2548470835];
const v2 = [-609515.2548470835,v1,-609515.2548470835];
const v3 = v2.splice(v1,v1,v2);
throw v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
