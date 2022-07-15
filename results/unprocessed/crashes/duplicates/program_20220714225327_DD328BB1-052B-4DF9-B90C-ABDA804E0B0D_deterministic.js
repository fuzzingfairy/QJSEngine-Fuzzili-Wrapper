function main() { 
const v1 = [-0.0,-0.0,-0.0,-0.0,-0.0];
const v3 = {"apply":Object,"call":Object,"defineProperty":Object,"getOwnPropertyDescriptor":Object};
const v5 = new Proxy(v1,v3);
v5.__proto__ = v5;
const v7 = Object();
const v8 = v7 <= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
