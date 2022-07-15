function main() { 
const v0 = {};
const v1 = [v0,v0];
v0.__proto__ = v1;
const v3 = /./u;
const v4 = Object instanceof Object;
const v5 = v0.ownKeys(v4,v0,Object);
const v6 = {};
const v7 = [v6,v6,v6];
const v8 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
