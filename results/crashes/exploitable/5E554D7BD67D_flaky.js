function main() { 
const v3 = {"defineProperty":Float32Array,"deleteProperty":57386,"getOwnPropertyDescriptor":57386,"isExtensible":512,"preventExtensions":Float32Array,"setPrototypeOf":Float32Array};
const v5 = new Proxy(Float32Array,v3);
v3.__proto__ = v5;
const v6 = Object;
const v9 = Object();
const v11 = Object["setPrototypeOf"](v9,v5);
const v12 = [769155.1160744734,769155.1160744734,769155.1160744734,769155.1160744734];
const v14 = Object;
const v15 = Object(Float32Array);
const v16 = v15[v3];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
