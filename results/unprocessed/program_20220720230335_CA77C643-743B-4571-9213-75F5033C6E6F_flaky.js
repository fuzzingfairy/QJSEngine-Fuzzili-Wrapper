function main() { 
const v0 = {};
const v1 = !v0;
const v3 = [v0];
{
    v0.__proto__ = v3;
    for (const v4 in v0) {
        let v6 = 0;
        while (v6 < 5) {
            const v8 = v6++;
        }
        const v9 = {"__proto__":v3,"c":v0,"e":Object,"length":Object,"valueOf":v4};
        const v10 = Object;
        const v11 = v3();
        const v13 = v0["indexOf"](..."indexOf",1,5,v0);
    }
}
const v16 = [-1.0,-1.0];
const v17 = "global";
const v18 = Object;
const v19 = Object;
const v20 = [-1.0,-1.0,-1.0];
const v21 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
