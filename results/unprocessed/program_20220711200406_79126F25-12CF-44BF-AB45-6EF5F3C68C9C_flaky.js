function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
v0.__proto__ = v1;
const v3 = typeof Object;
const v5 = v3 === "undefined";
Object[v1] *= Object;
const v8 = Object;
const v10 = Object();
const v11 = [0.0,0.0,0.0];
const v12 = 3320234181;
const v13 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
