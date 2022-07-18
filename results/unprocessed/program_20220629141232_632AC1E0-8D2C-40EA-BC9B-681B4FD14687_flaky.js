function main() { 
const v1 = [1000,1000];
const v2 = v1.unshift(1000,...v1,v1);
const v4 = v1();
v2.__proto__ = Object;
const v6 = Object();
const v7 = {};
const v8 = [v7,1000];
const v10 = [1000000000000.0,1000000000000.0];
const v11 = v6();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
