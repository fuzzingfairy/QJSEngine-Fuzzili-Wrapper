function main() { 
const v1 = {};
const v2 = [v1];
with (v1) {
    __proto__ = v2;
}
const v3 = [-1563394777,-1563394777,-1563394777,-1563394777,-1563394777];
const v4 = `species${v3}multiline${v1}string`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
