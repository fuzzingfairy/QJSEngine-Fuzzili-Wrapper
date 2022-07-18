function main() { 
const v1 = Proxy;
const v2 = WeakSet;
const v3 = {};
const v4 = [v3,v3,v3,v3,v3];
const v6 = Object();
const v8 = [v6];
const v9 = Promise.reject;
const v10 = Reflect.apply(v9,v4,v8);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
