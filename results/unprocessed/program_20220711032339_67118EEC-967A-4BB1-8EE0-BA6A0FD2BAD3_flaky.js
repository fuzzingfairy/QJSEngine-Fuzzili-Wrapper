function main() { 
const v1 = [-1359297560,-1359297560];
const v3 = {"getPrototypeOf":Number,"preventExtensions":Number};
const v5 = new Proxy(v1,v3);
do {
    v1.__proto__ = v5;
} while (0 < 5);
const v9 = Proxy();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
