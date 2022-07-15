function main() { 
const v3 = Object();
const v6 = {"apply":Object,"call":Object,"construct":SyntaxError,"defineProperty":RangeError,"deleteProperty":Object,"getOwnPropertyDescriptor":SyntaxError,"has":Object,"ownKeys":Object,"preventExtensions":SyntaxError};
const v8 = new Proxy(v3,v6);
with (Object) {
    const v11 = ["hMixiMRp0J",v8];
    const v13 = {"get":SyntaxError};
    const v14 = Object.defineProperty(v11,2147483649,v13);
    const v15 = v6.apply;
    const v16 = Reflect.apply(v15,v3,v11);
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
