/**
 * Custom function bind polyfill(Procedural)
 * @param {object} thisArg Context where new function will be binded
 * @param  {array} args Arguments
 * @example 
 *      const obj = {
            fname: "abc"
        }
        function getName() {
            return this.fname
        }
        const bindedFunc = getName.pBindEs6(obj)
        bindedFunc() returns "abc"
 * @returns New function binded in given context
 */
Function.prototype.pBind = function (thisArg, ...args) {
    const self = this
    return function (...partialArgs) {
        return self.apply(thisArg, [...args, ...partialArgs])
    }
}

/**
 * Custom function bind polyfill(ES6)
 * @param {object} thisArg Context where new function will be binded
 * @param  {array} args Arguments
 * @example 
 *      const obj = {
            fname: "abc"
        }
        function getName() {
            return this.fname
        }
        const bindedFunc = getName.pBindEs6(obj)
        bindedFunc() returns "abc"
 * @returns New function binded in given context
 */
Function.prototype.pBindEs6 = function (thisArg, ...args) {
    return (...partialArgs) => {
        return this.apply(thisArg, [...args, ...partialArgs])
    }
}