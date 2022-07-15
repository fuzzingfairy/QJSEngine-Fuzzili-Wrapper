function main() { 
const v1 = [3.0];
const v2 = [v1,3.0,3.0,3.0,3.0];
const v3 = v1.push(3.0,v2);
let [v4,v5,v6] = v1;
const v7 = v6.set();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
