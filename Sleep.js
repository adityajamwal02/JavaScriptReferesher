/*Write an asyncronous function that accepts a positive integer millis and sleeps for that many milliseconds. It can resolve any value.

Example 1:
Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});

Example 2:
Input: millis = 200
Output: 200
Explanation: It should return a promise that resolves after 200ms.
*/

/**
 * @param {number} millis
 */
async function sleep(millis) {
    const promise = new Promise((resolve, reject) => {
        timeOut = setTimeout(() => {
            resolve();
        }, millis);
    });
return promise;    
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

/* Explaination

const promise = new Promise((resolve, reject) => { - This line creates a new promise object using the Promise constructor. The Promise constructor takes a function as input, which is called the executor function. This executor function takes two arguments: resolve and reject, which are functions that are used to resolve or reject the promise, respectively.
timeOut = setTimeout(() => { resolve(); }, millis); - This line sets a timer using the setTimeout function, which takes two arguments: a function to call when the timer expires, and the number of milliseconds to wait before calling that function. In this case, the function simply calls the resolve function, which resolves the promise and signals that the sleep has completed.

Complexity
Time complexity: O(1)
Space complexity: O(1)
*/
