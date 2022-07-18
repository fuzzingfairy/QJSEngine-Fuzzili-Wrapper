function main() { 
const v1 = {};
const v2 = ["6",v1,v1];
v1.__proto__ = v2;
const v3 = Object;
const v4 = v1();
const v6 = [1000000000000.0,1000000000000.0,1000000000000.0,1000000000000.0];
const v7 = RangeError;
const v8 = 68751.3361553317;
const v10 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
