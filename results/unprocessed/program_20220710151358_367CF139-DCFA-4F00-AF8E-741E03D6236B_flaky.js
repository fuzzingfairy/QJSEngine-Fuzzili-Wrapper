function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v0.__proto__ = v1;
const v4 = [-5.0,-5.0,-5.0,-5.0,-5.0];
const v5 = [-5.0,-5.0,-5.0];
const v8 = Object();
v8.toString = Object;
const v10 = Object();
const v11 = -1500618098;
const v13 = Object();
const v15 = Object();
const v16 = isNaN;
const v18 = [v10,...v4,4,v13,v10,`-9007199254740991${-5.0}unicode${-5.0}MIN_SAFE_INTEGER${v0}-4294967295`,...v5,4,Object];
const v19 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
