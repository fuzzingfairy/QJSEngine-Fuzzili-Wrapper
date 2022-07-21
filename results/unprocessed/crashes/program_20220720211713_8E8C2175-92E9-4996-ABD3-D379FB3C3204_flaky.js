function main() { 
const v1 = -1000000.0;
const v2 = {};
const v3 = [v2,v2];
const v4 = "a";
v2.__proto__ = v3;
const v6 = Object();
const v9 = Object();
const v10 = Object(50868,v3);
const v11 = [50868,50868];
v9[3] = 50868;
const v13 = SyntaxError ^ v3;
v9[1073741824] = SyntaxError;
const v15 = Object();
const v16 = new Float32Array(50868);
const v18 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
