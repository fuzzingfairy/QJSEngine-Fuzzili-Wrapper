function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
const v3 = {};
const v5 = new Proxy(v1,v3);
const v6 = [3770618255];
v5.__proto__ = v5;
const v7 = v6.filter(...v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
