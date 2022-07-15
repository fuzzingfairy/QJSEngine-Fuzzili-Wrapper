function main() { 
const v1 = [130617.35566612938,130617.35566612938,130617.35566612938];
const v3 = [v1];
const v4 = v1.unshift;
const v5 = Reflect.apply(v4,v1,v3);
v4.a |= v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
