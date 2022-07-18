function main() { 
const v3 = {"apply":Object,"construct":Object,"has":Object,"ownKeys":Object,"preventExtensions":Object};
const v5 = new Proxy(Object,v3);
Object.__proto__ = v5;
const v6 = 0;
const v8 = Object.__proto__;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
