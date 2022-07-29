function main() { 
const v0 = {};
const v3 = {"apply":-5.0,"construct":Promise,"getOwnPropertyDescriptor":-5.0,"has":-5.0,"isExtensible":Promise,"ownKeys":-5.0,"set":v0};
const v6 = [-5.0];
const v7 = Promise.reject;
const v8 = Reflect.apply(v7,v3,v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
