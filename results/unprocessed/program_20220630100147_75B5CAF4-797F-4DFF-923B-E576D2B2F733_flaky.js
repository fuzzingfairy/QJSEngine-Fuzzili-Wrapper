function main() { 
const v0 = {};
const v1 = [v0];
const v4 = [v1];
const v5 = v1.unshift;
const v6 = Reflect.apply(v5,v1,v4);
const v7 = [1000.0,1000.0,1000.0,1000.0];
const v10 = Math.log(v4);
const v11 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
