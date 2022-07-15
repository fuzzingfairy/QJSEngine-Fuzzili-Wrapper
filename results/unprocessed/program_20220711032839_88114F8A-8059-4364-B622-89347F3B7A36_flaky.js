function main() { 
const v2 = {"call":Object,"setPrototypeOf":Object};
const v4 = new Proxy(Object,v2);
const v5 = [590508.4903090673,590508.4903090673,590508.4903090673,590508.4903090673,590508.4903090673];
v2.__proto__ = v4;
v2[v5] >>>= 590508.4903090673;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
