function main() { 
const v1 = [-384961239,-384961239];
const v3 = [v1,v1];
const v4 = v1.push;
const v5 = Reflect.apply(v4,v1,v3);
const v7 = new Int8Array(v3);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
