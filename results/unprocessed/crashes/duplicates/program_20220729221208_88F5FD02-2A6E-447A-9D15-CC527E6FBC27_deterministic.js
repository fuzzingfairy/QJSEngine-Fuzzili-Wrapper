function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
const v4 = [v1];
const v6 = [v4,v1,4.0,isFinite,isFinite];
const v7 = v1.concat;
const v8 = Reflect.apply(v7,v4,v6);
v0.__proto__ = v4;
const v10 = 20;
v0[v8] = 1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
