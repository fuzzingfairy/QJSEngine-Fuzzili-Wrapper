function main() { 
const v2 = ["9007199254740992"];
const v4 = v2["splice"](-65536,-65536,v2);
const v6 = ["splice",v4];
const v7 = "9007199254740992".endsWith;
const v8 = Reflect.apply(v7,v2,v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
