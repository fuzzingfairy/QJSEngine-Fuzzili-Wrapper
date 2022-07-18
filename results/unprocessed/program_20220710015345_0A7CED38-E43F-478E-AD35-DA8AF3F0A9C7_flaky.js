function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
v0.__proto__ = v1;
const v4 = Object();
const v5 = [6];
const v6 = 452685.89813322504;
const v8 = [v5,v1];
const v9 = Object.getOwnPropertyDescriptor;
const v10 = Reflect.apply(v9,v4,v8);
const v12 = Object();
const v13 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
