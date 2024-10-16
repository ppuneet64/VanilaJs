New Way : https://github.com/cheatsheet1999/FrontEndCollection/blob/main/JS-Core/implement%20curry()%20with%20placeholder%20support.md

const  join = (a, b, c) => {
   return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)
const _ = curry.placeholder

curriedJoin(1, 2, 3) // '1_2_3'

curriedJoin(_, 2)(1, 3) // '1_2_3'

curriedJoin(_, _, _)(1)(_, 3)(2) // '1_2_3'
/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  // your code here
  return function curried(...args) {
    const cleanedArgs = args.slice(0, fn.length);
    const hasPlaceholder = cleanedArgs.some((arg) => arg === curry.placeholder);

    if(!hasPlaceholder && cleanedArgs.length === fn.length) {
      return fn.apply(this, cleanedArgs);
    }
    else {
      return function next(...nextArgs) {
        return curried.apply(this, mergeArgs(cleanedArgs, nextArgs));
      }
    }
  }
}

const curry = (fn) => {
    return function curried(...args) {
        // If enough arguments are provided, 
        // call the original function
        if (args.length >= fn.length &&
            !args.includes(curry.placeholder)) {
            return fn.apply(this, args);
        } else {
            // Otherwise, return a curried function 
            // with placeholder support
            return function (...nextArgs) {
                const combinedArgs = args.map(
                    arg => arg === curry.placeholder && 
                    nextArgs.length ? nextArgs.shift() : arg).
                    concat(nextArgs);
                return curried(...combinedArgs);
            };
        }
    };
};

// Placeholder symbol for 
// missing arguments
curry.placeholder = Symbol();

// Example: Curried function to 
// concatenate three strings
const concat3 = curry((a, b, c) => 
    `${a} ${b} ${c}`);

// Partial application using placeholders
const concatHello = concat3('Hello,', 
    curry.placeholder, 'World!');
console.log(concatHello('Welcome'));
console.log(concatHello('Greetings'));
curry.placeholder = Symbol()

function mergeArgs(args, nextArgs) {
  let result = [];
  // iterate over args (because we need to replace from it)
  // in each iteration, if we find element == curry.placeholder
  // then we replace that placeholder with first element from nextArgs
  // else we put current element
  args.forEach((arg) => {
    if(arg === curry.placeholder && nextArgs.length) {
      result.push(nextArgs.shift());
    }
    else {
      result.push(arg);
    }
  })

  // merge result and nextArgs together, and return it
  return [...result, ...nextArgs];
}
/** Old Style
function mergeArgs(oldArgs, newArgs) {
  const mergedArgs = [];

  let i = 0;
  let j = 0;

  while (i < oldArgs.length && j < newArgs.length) {
    if (oldArgs[i] === curry.placeholder) {
      mergedArgs.push(newArgs[j]);
      j++;
      i++;
    } else {
      mergedArgs.push(oldArgs[i]);
      i++;
    }
  }

  while (i < oldArgs.length) {
    mergedArgs.push(oldArgs[i]);
    i++;
  }

  while (j < newArgs.length) {
    mergedArgs.push(newArgs[j]);
    j++;
  }

  return mergedArgs;
} **/
