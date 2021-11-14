// depp clones objects, arrays and functions
const deepClone = (object) => {
    let clone = {};
    Object.keys(object).map(prop => {
        if (Array.isArray(object[prop])) {
            clone[prop] = [].concat(object[prop])
        } else if (typeof object[prop] === 'object') {
            clone[prop] = deepClone(object[prop])
        } else clone[prop] = object[prop]
    })
    return clone
}

let obj1 = { a: 1, b: 2 }
let obj2 = deepClone(obj1);
obj2.a = 10;
console.log(obj2, obj1); // obj2 = {a: 10, b: 2} -- obj1 = { a: 1, b: 2}