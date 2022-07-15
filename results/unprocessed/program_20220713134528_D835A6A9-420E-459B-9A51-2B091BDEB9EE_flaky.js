function main() { 
const v0 = "function";
const v1 = {};
const v2 = [v1,v1,v1];
const v4 = [v2];
const v5 = v2.fill;
const v6 = Reflect.apply(v5,v2,v4);
const v8 = v1 || v1;
const v9 = this;
v8[v6] **= 3814854630;
const v10 = [3814854630,3814854630,3814854630,3814854630];
const v12 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
