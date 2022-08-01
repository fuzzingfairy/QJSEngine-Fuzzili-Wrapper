// Minimizing C3D79CBA-4284-4025-A9C2-55FA83F3F51B
function main() { 
const v0 = {};
function v1(v2,v3,v4) {
}
const v5 = {"apply":v1,"call":v1,"defineProperty":v1,"getPrototypeOf":v1,"isExtensible":v1,"ownKeys":v1};
const v7 = new Proxy(v0,v5);
for (let v11 = 0; v11 < 100; v11++) {
    v0.__proto__ = v7;
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
