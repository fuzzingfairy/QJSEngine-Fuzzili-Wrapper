function main() { 
const v1 = [430971.4987645431];
const v3 = {"call":v1,"construct":-256,"getPrototypeOf":-256,"has":v1};
const v5 = new Proxy(v1,v3);
const v7 = v1["unshift"](v5);
throw v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
