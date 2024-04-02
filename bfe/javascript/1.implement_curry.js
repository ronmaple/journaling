
// This is a JavaScript coding problem from BFE.dev 

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  // your code here

  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    }
    else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}

/*
The curried function: This is the function returned by curry. It takes any number of arguments (...args) and checks if the number of arguments is 
greater than or equal to the number of parameters expected by the original function func (determined by func.length).

Applying the original function: If the number of arguments passed to curried is enough to call the original function (args.length >= func.length), it
calls func with those arguments using func.apply(this, args). The apply method is used to call func with a specific this value and an array of arguments.

Returning a new function for additional arguments: If the number of arguments is not enough, curried returns a new function that takes additional arguments (...args2). 
This new function, when called, will concatenate the new arguments args2 with the previously provided arguments args and call curried again using curried.apply(this, args.concat(args2)). 
This allows for accumulating arguments until there are enough to call the original function.
*/
