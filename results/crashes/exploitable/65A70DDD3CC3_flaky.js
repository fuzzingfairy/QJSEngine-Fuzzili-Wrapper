function main() { 
const v1 = [-43379.25747694343,-43379.25747694343,-43379.25747694343];
const v3 = {"apply":Error,"call":Error,"defineProperty":Error,"getPrototypeOf":Error};
const v5 = new Proxy(v1,v3);
v5.__proto__ = v5;
const v7 = v5["min"]();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
