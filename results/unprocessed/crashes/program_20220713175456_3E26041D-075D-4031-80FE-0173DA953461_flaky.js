function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
const v4 = [4294967295,4294967295];
function* v5(v6,v7) {
}
const v9 = {"apply":v5,"construct":v5,"get":Object,"getPrototypeOf":Object,"has":v5,"ownKeys":v5,"setPrototypeOf":Object};
const v11 = new Proxy(v0,v9);
v11.ownKeys /= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
