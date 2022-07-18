function main() { 
const v0 = {};
const v1 = [v0];
const v2 = [v0];
const v3 = {};
const v4 = [v3];
with (v0) {
    __proto__ = v1;
}
const v5 = /E\Sq8/imu;
const v7 = [v5];
const v8 = v4.toLocaleString;
const v9 = Reflect.apply(v8,v1,v7);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
