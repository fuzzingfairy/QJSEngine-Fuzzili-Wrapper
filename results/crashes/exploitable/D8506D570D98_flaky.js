function main() { 
const v1 = [96424.01658096397,96424.01658096397];
const v4 = [36649,36649];
const v5 = v1.copyWithin;
const v6 = Reflect.apply(v5,v1,v4);
const v9 = Object();
const v11 = {"get":v5};
const v12 = Object.defineProperty(v9,"valueOf",v11);
v6[Uint32Array] *= v12;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
