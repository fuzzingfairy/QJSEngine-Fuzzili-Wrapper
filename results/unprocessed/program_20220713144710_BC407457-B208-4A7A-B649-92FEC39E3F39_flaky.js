function main() { 
const v0 = {};
const v1 = {"apply":v0,"call":v0,"construct":v0,"deleteProperty":v0,"getOwnPropertyDescriptor":v0,"getPrototypeOf":v0,"has":v0,"isExtensible":v0,"ownKeys":v0,"preventExtensions":v0,"set":v0};
const v3 = new Proxy(v0,v1);
const v5 = [603876.1879588086,603876.1879588086,603876.1879588086,603876.1879588086];
v0.__proto__ = v3;
let v7 = [1162776023,1162776023,1162776023,1162776023,1162776023];
[v7] = v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
