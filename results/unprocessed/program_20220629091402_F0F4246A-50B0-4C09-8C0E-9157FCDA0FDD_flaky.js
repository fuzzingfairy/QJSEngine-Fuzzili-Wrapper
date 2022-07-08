function main() { 
const v1 = {};
const v2 = [v1,v1,v1];
const v4 = [v2];
const v5 = v2.unshift;
const v6 = Reflect.apply(v5,v2,v4);
const v7 = delete Object[v4];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
