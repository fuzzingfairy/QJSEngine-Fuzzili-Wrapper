function main() { 
const v1 = [742079.73410421,742079.73410421,742079.73410421,742079.73410421];
const v2 = v1.__proto__;
v2[6] = v2;
const v3 = v2 > v2;
const v5 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
