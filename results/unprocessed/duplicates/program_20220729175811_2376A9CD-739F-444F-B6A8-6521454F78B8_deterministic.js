function main() { 
let v1 = 1;
let v2 = 100;
let v3 = 1;
function v4() {
    [v2,v3,v1] = "toPrimitive";
}
const v5 = v4();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
