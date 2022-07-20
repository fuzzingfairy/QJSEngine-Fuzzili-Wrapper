function main() { 
const v1 = [-1.0,-1.0,-1.0,-1.0];
const v2 = {};
const v3 = [v2,v2];
v2.__proto__ = v3;
const v6 = new Float32Array(10603);
const v7 = {"__proto__":v6,"a":v3,"b":v2,"c":v1,"constructor":Float32Array,"d":v1,"e":v2};
const v8 = v7 * v2;
const v9 = Object;
const v10 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
