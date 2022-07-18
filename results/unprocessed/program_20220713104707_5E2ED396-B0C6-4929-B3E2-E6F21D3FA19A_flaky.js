function main() { 
const v2 = [-1000000.0,-1000000.0,-1000000.0,-1000000.0,-1000000.0];
const v5 = [v2,"4294967295",-1000000.0,3718869793];
const v6 = v2.unshift;
const v7 = Reflect.apply(v6,v2,v5);
const v8 = v5.slice(v2);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
