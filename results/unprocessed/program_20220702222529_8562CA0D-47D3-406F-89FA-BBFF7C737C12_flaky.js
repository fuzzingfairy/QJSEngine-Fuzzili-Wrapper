function main() { 
const v0 = /\D\d/gym;
const v1 = {};
const v2 = [v1];
const v3 = {};
const v6 = [Promise,v1,v0,v2,v3];
const v7 = Promise.race;
const v8 = Reflect.apply(v7,v2,v6);
const v9 = [v3,v3,v3];
const v11 = this;
const v12 = new v7(...v9,v7,v1,v1,v7,...v1);
const v14 = Object();
const v15 = [1000.0];
const v16 = collectGarbage;
const v18 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
