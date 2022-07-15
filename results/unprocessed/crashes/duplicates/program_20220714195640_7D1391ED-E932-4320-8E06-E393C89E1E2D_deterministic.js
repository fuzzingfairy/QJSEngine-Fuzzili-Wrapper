function main() { 
const v1 = [-2948437113,-2948437113,-2948437113,-2948437113];
const v3 = {};
const v4 = [Object,...v1];
const v6 = Object();
const v8 = v4["unshift"](v6,v1,v4);
v3.__proto__ /= v4;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
