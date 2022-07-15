function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
const v2 = {};
const v3 = [v2,v2];
let v4 = delete v3[v2];
let v5 = {};
const v7 = {"apply":Object,"call":Object,"defineProperty":Object,"getPrototypeOf":Object,"preventExtensions":Object};
const v9 = new Proxy(Object,v7);
let v10 = [v5,v5];
let v11 = v1;
Object.__proto__ = v9;
let v13 = {};
({"b":v10,"dotAll":v4,"hasInstance":v13,"prototype":v11,"unscopable":v5,} = Object);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
