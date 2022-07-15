function main() { 
const v1 = [1389462690,1389462690,1389462690];
v1[2] = v1;
const v2 = {"deleteProperty":1389462690,"getPrototypeOf":v1};
const v4 = new Proxy(v1,v2);
for (const v5 of v1) {
    const v6 = v5 in v4;
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
