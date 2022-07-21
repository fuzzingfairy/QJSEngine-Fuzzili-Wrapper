function main() { 
function v0(v1,v2) {
}
const v4 = {"construct":v0,"defineProperty":v0,"getPrototypeOf":v0};
const v6 = new Proxy(Promise,v4);
const v7 = Object;
v6.__proto__ = v6;
const v8 = v6 ** Proxy;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
