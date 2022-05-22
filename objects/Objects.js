const deepCopy = (obj = {}) => {
    if (Array.isArray(obj) && !obj.length) return []
    if (typeof obj === "object" && !Object.keys(obj).length) return {}
    if (Array.isArray(obj) && obj.length) {
        const newArr = []
        for (let i = 0; i < obj.length; i++) {
            newArr[i] = deepCopy(obj[i])
        }
        return newArr
    }
    if (typeof obj === "object" && Object.keys(obj).length) {
        const newObj = {}
        for (const key in obj) {
            newObj[key] = deepCopy(obj[key])
        }
        return newObj
    }
    return obj
}



const flatternObj = (obj, output = {}, refKey = '') => {
    if (!Object.keys(obj).length) return {}
    for (const k in obj) {
        let key = (refKey) ? `${refKey}.${k}` : k
        let value = obj[k]
        if (typeof value === "object" && !Array.isArray(value)) {
            flatternObj(value, output, key)
        } else {
            output[key] = value
        }
    }
    return output
}


const obj = {
    name: "Puneet",
    age: 28,
    address: {
        streat: "123",
        details: {
            area: "mauganj",
            pincode: 486331
        }
    },
    items: [{
        name: "1",
        pos: 20
    }, {
        name: "l",
        pos: 56
    }]
}
//const clonedObj = deepCopy(obj)
console.log(flatternObj(obj))