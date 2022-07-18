function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
const v3 = [v1];
v0.__proto__ = v1;
const v4 = [2265729409,2265729409,v3,2265729409];
const v5 = Object;
const v6 = v1();
const v7 = delete v1.constructor;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
