function main() { 
const v1 = [2563079640,2563079640,2563079640];
const v2 = {};
const v3 = [v2,v2,v2,v2];
v2.__proto__ = v3;
v2.__proto__ += v1;
const v4 = v3.toString();
const v5 = [2563079640,2563079640,2563079640,2563079640,2563079640];
const v6 = null;
const v7 = /\s\S/imu;
const v8 = [2563079640,2563079640];
const v9 = Proxy;
const v11 = Object();
v2[5] = v11;
const v13 = v8 instanceof Object;
const v15 = Object();
const v16 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
