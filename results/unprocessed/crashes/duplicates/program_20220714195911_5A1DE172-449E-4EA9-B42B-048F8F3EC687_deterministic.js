function main() { 
const v1 = [1024,1024];
const v3 = Object();
const v4 = v3.__proto__;
const v6 = [v4,v4,Object,v1];
const v7 = v1.push;
const v8 = Reflect.apply(v7,v1,v6);
Object.prototype |= v6;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
