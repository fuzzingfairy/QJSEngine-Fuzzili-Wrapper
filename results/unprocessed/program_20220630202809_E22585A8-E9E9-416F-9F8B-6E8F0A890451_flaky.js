function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
const v3 = 1;
v0.__proto__ = v1;
const v4 = [-2491926917,-2491926917,-2491926917,-2491926917];
const v6 = Object();
const v7 = v0 < v0;
const v8 = v7 ? v0 : v0;
const v11 = [-2491926917,...v1,Object,v0,-2.2250738585072014e-308,-2491926917,v4,-1000000000.0,v6];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
