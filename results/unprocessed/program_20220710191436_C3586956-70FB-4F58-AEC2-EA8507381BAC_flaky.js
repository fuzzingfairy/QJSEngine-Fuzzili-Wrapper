function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
const v2 = /\W/i;
const v3 = Date;
v0.__proto__ = v1;
const v5 = v1();
const v7 = 1;
const v9 = Object();
const v10 = Object;
const v11 = Object();
const v12 = Object(TypeError,v9,v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
