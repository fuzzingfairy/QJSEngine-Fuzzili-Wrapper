function main() { 
const v1 = [3.0,3.0,3.0,3.0];
v1[9] = v1;
const v2 = {"construct":v1,"defineProperty":v1,"deleteProperty":3.0,"getPrototypeOf":v1,"has":3.0,"ownKeys":v1,"set":v1,"setPrototypeOf":v1};
const v4 = new Proxy(v1,v2);
const v6 = new Int8Array(v4);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
