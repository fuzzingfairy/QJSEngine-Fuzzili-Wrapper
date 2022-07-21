function main() { 
const v0 = {};
const v1 = [v0];
let [v2] = v1;
const v3 = v1 in v0;
v0.__proto__ = v1;
const v5 = Object();
const v7 = v0["startsWith"](v1,v0,"startsWith");
const v8 = {"apply":v2,"call":v2,"construct":v2,"deleteProperty":v2,"get":v2,"getOwnPropertyDescriptor":v2,"getPrototypeOf":v2,"ownKeys":v2,"preventExtensions":v2,"set":v2};
const v10 = new Proxy(v1,v8);
const v11 = Uint8ClampedArray;
const v13 = Object();
const v16 = Math.asin();
for (let v20 = 0; v20 < 8; v20++) {
    const v21 = delete Object.prototype;
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
