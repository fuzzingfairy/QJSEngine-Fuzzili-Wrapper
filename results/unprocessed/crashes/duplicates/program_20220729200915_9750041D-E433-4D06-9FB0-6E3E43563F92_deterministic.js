function main() { 
for (let v4 = 0; v4 < 20; v4++) {
    const v5 = {};
    const v6 = [v5];
    const v8 = Object();
    const v9 = v5;
    v9.__proto__ = Object;
    const v10 = v8 << Object;
    Object.__proto__ = v6;
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
