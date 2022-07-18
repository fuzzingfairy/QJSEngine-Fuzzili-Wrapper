function main() { 
const v1 = "object";
const v2 = [-4.0,-4.0];
const v3 = {};
const v4 = [v3];
v3.__proto__ = v4;
const v6 = -19160.446295485715;
throw v4;
const v8 = Object;
v3.__proto__ = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
