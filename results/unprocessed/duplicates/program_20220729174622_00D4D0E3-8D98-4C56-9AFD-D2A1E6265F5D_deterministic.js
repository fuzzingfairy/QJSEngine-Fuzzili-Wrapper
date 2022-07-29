function main() { 
const v3 = [2095678525,2095678525,2095678525,2095678525];
const v4 = [3605609751,-2.2250738585072014e-308];
v4[2095678525] = 3605609751;
const v6 = v4.unshift;
const v7 = Reflect.apply(v6,v3,v4);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
