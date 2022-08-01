function main() { 
const v0 = /q\Se/m;
function v1(v2,v3,v4,v5,...v6) {
}
const v9 = {"deleteProperty":v1,"has":v1,"isExtensible":v1,"preventExtensions":v1,"setPrototypeOf":Object};
const v11 = new Proxy(v0,v9);
while (0 < 7) {
    v9.__proto__ = v11;
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
