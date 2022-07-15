function main() { 
const v1 = [Reflect,Reflect,Reflect,Reflect,Reflect,Reflect,Reflect,Reflect];
const v4 = [-4.0,-4.0,-4.0,-4.0,-4.0];
const v5 = [Reflect,v1];
const v6 = Object.setPrototypeOf;
const v7 = Reflect.apply(v6,v4,v5);
const v8 = v7.isInteger();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
