function main() { 
const v0 = {};
const v2 = {};
const v3 = [v2];
const v6 = Object(v3);
v6[6] = v6;
const v8 = [v6];
const v9 = "string".padStart;
const v10 = Reflect.apply(v9,"65536",v8);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
