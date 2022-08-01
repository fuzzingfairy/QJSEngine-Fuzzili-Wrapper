function main() { 
const v1 = [2280502976];
const v3 = [130917.11283160816,130917.11283160816,130917.11283160816];
const v4 = {};
const v5 = [v4,v4,v4,v4];
const v6 = [2280502976,2280502976,2280502976];
const v9 = [v4,...v5,...v3,1,v4,1,1];
v9[2280502976] = v9;
const v11 = v6.pop;
const v12 = Reflect.apply(v11,v1,v9);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
