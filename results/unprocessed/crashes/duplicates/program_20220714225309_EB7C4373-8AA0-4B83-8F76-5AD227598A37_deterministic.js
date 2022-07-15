function main() { 
const v1 = [-0.0];
const v3 = [v1,v1,-0.0,v1,v1];
const v4 = v1.unshift;
const v5 = Reflect.apply(v4,v1,v3);
const v7 = [-1162759622,-1162759622,-1162759622];
v7[1284353465] >>>= v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
