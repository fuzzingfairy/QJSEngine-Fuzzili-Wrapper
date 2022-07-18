function main() { 
const v3 = {"deleteProperty":Object,"setPrototypeOf":Object};
const v5 = new Proxy(Object,v3);
for (let v9 = 0; v9 < 7; v9++) {
    Object.__proto__ = v5;
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
