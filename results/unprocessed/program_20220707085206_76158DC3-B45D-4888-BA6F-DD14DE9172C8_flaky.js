function main() { 
const v1 = 1000;
const v2 = [1000,1000,1000,1000,1000];
const v3 = {"deleteProperty":1000,"getPrototypeOf":1000,"isExtensible":v1,"preventExtensions":v1};
const v5 = new Proxy(v2,v3);
v2.__proto__ = v5;
for (let [,,v6,v7] of v2) {
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
