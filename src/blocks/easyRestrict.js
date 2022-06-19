import { registerRestrictions } from "../restrictions";
export function parentize(parents, name, msg) {
    registerRestrictions(name, [
        {
            type: "hasparent",
            message: ("$" + msg),
            types: parents
        }
    ]);
}
export function filled(inputs, name, msg) {
    registerRestrictions(name, [
        {
            type: "notempty",
            message: ("$" + msg),
            types: inputs
        }
    ]);
}
/*
export function register(name, object) {
    let used = [false, false]
    let types = [false, false]
    let using = [null, null]
    if (object.parent != null) used[0] = true
    if (object.fill != null) used[1] = true
    if (object.parent[0][0] === null) types[0] = true
    if (object.fill[0][0] === null) types[1] = true
    if (types[0]) using[0] = [object.parent[0][0]]; else using[0] = object.parent[0][0]
    registerRestrictions(name, [
        {
            type: "notempty",
            message: "$abvc",
            types: null
        }
    ]);
}
*/