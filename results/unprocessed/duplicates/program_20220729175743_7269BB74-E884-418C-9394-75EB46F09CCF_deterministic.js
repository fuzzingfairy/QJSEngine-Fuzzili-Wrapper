function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1];
v1.__proto__ = v2;
for (const v3 in v1) {
    const v4 = `bigint${Infinity}S1ZH24i83B${v3}KrT3jR6Xnx${v2}gpX21TbOA5${v3}-2147483648`;
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
