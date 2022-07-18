function main() { 
const v1 = Object();
const v3 = {"getOwnPropertyDescriptor":Object,"setPrototypeOf":Object};
const v5 = new Proxy(v1,v3);
v1.__proto__ = v5;
const v7 = [v5,v5];
const v8 = "-65535".endsWith;
const v9 = Reflect.apply(v8,v3,v7);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
