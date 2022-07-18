function main() { 
const v2 = Object();
const v3 = [Object,"-65536",v2,v2,Object,v2,Object];
const v4 = NaN;
const v6 = Object();
Object.__proto__ = v3;
"-65536"[Object] = v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
