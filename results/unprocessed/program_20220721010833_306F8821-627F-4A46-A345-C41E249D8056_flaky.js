function main() { 
const v1 = {};
const v4 = Object();
const v6 = [v4,"caller"];
const v8 = {"get":Object};
const v9 = Object.defineProperty(v6,1073741824,v8);
const v10 = Object.getOwnPropertyDescriptor;
const v11 = Reflect.apply(v10,v1,v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
