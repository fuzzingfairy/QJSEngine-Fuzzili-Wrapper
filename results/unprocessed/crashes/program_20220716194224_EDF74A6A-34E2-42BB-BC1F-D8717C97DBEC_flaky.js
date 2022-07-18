function main() { 
const v1 = {};
const v2 = DataView;
const v3 = Object;
const v4 = [v1,v1,v1];
const v6 = [1000000000000.0,1000000000000.0,1000000000000.0];
v1.__proto__ = v4;
for (let v10 = 0; v10 < 100; v10++) {
    const v11 = v1(v4);
}
const v12 = [1000000000000.0,1000000000000.0,1000000000000.0,1000000000000.0];
[] = v12;
const v14 = v12["reduce"](1000000000000.0,100,100,v1);
const v15 = Object;
const v17 = Object;
const v19 = Object();
const v20 = [65537,65537,65537];
const v21 = (v22,v23,v24) => {
    return v24;
};
const v26 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
