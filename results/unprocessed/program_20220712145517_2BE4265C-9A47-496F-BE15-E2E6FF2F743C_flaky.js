function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
v0.__proto__ = v1;
const v2 = {};
const v3 = [v2,v2,v2];
const v4 = {};
const v5 = {};
const v6 = [v5,v5,v5];
with (v1) {
    length = v1;
}
const v7 = JSON;
const v8 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
