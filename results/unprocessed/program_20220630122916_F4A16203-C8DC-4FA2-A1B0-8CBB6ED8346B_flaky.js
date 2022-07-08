function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v0.__proto__ = v1;
const v2 = {};
const v3 = [v2,v2];
const v4 = [v0,v2,v1,v2,v3,...v3,v1];
const v6 = {};
const v7 = new Uint8ClampedArray(v4);
const v8 = [v6,v6,v6];
const v10 = Object();
const v12 = Object(v0,v10,v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
