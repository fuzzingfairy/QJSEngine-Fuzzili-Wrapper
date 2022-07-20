function main() { 
const v0 = {};
const v1 = [v0,v0];
v0.__proto__ = v1;
const v4 = v1();
const v5 = [v0,-268435456,-268435456,-268435456];
const v8 = [-358426.31856678997,-358426.31856678997];
const v9 = Object;
const v10 = v1.reverse(...v5,...v8,1,Object);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
