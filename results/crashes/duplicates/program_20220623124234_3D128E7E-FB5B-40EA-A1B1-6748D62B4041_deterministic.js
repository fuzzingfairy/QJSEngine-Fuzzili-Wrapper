function main() { 
const v0 = {};
const v1 = [v0,v0];
const v2 = [v0,v0,v0,v0,v1,v1,v1,v0,v0];
const v4 = [v1,v2];
const v5 = v2.fill;
const v6 = Reflect.apply(v5,v1,v4);
while (0 < v6) {
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
