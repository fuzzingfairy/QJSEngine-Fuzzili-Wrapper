function main() { 
const v1 = [-102542.47227087768,-102542.47227087768];
for (const v2 in v1) {
    const v3 = delete v1.__proto__;
    v1.constructor ^= v1;
    const v4 = v1.fill(v1);
    const v5 = {"a":v2,"constructor":v4,"d":-102542.47227087768,"e":-102542.47227087768,"toString":-102542.47227087768,"valueOf":v3};
}
const v7 = Object();
let v8 = 0;
do {
    const v11 = Object();
    const v12 = v8++;
} while (v8 < 10);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
