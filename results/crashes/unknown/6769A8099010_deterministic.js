function main() { 
const v0 = {};
const v1 = {"construct":v0,"defineProperty":v0};
const v3 = new Proxy(v0,v1);
v3.__proto__ = v3;
const v4 = v3.construct;
const v5 = [v0,v0];
const v9 = {"__proto__":v5,"a":String,"b":v0,"c":v0,"constructor":Object,"e":207960.9615347602,"valueOf":String};
const v10 = 9007199254740991;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
