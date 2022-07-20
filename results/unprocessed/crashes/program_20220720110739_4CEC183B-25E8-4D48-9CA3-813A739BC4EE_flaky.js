function main() { 
const v1 = [-256,-256,-256,-256,-256];
v1[7] = -256;
const v3 = [-256,-256,-256,v1];
const v4 = v3.splice;
const v5 = Reflect.apply(v4,v1,v3);
const v6 = -4.0;
const v7 = ArrayBuffer;
const v8 = Object;
const v9 = {};
const v10 = [v9,v9,v9,v9,v9];
const v11 = [-256];
const v12 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
