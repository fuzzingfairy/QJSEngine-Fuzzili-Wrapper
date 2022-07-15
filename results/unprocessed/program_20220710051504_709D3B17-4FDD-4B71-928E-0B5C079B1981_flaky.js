function main() { 
const v0 = {};
const v1 = [v0];
with (v0) {
    __proto__ = v1;
}
for (let v4 = 0; v4 < 100; v4 = v4 + v1) {
}
for (let v8 = 0; v8 < 100; v8++) {
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
