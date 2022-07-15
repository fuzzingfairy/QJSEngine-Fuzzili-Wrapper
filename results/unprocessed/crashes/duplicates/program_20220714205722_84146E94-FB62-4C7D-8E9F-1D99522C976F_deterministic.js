function main() { 
const v1 = [-2775314386,-2775314386,-2775314386];
const v4 = [v1,-2775314386,v1,ReferenceError,v1];
const v5 = v1.push;
const v6 = Reflect.apply(v5,v1,v4);
v6[525793316] **= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
