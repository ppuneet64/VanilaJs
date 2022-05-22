class CustomArray {
    constructor() {
        this.length = 0
        this.data = {}
    }
    push(...items) {
        let index = this.length || 0
        for (const el of items) {
            this.data[index] = el
            this.length++
            index++
        }
    }
    pop() {
        let last = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return last
    }

    unShift(...items) {
        let t1 = performance.now()
        for (let i = items.length - 1; i >= 0; i--) {
            for (let j = this.length; j >= 1; j--) {
                this.data[j] = this.data[j - 1]
            }
            this.data[0] = items[i]
            this.length++
        }
        //Es6 solution
        // let newData = [...items, ...Object.values(this.data)]
        // this.data = { ...newData }
        // this.length = this.length + items.length
        let t2 = performance.now()
        console.log('performence', t2 - t1);
    }
}
//const newArr = new CustomArray()
const puArr = []
for (let i = 0; i < 1000; i++) {
    puArr.push(`hello-${i}`)
}

//newArr.push(...puArr)

setTimeout(() => {
    let t1 = performance.now()
    puArr.unshift("Are", "1", "2")
    //newArr.unShift("Are", "1", "2")
    let t2 = performance.now()
    console.log('performence', t2 - t1);
    //console.log(newArr);
}, 5000);