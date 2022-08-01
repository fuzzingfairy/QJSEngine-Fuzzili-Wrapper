function main() { 
const v2 = [-1858621265,-1858621265,-1858621265];
const v3 = {};
const v4 = [v3,v3,v3,v3];
const v5 = 100;
v3.__proto__ = v4;
const v6 = {};
const v7 = [v6,v6,v6,v6];
const v9 = [isFinite];
const v10 = v2.filter;
const v11 = Reflect.apply(v10,v3,v9);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
