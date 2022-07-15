function main() { 
for (let v6 = 0; v6 < 7; v6++) {
    const v8 = {"deleteProperty":Object,"get":Object,"getPrototypeOf":Object};
    const v10 = new Proxy(Object,v8);
    Object.__proto__ = v10;
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
