// Global object

setTimeout(() => {
    console.log('in the timeout')
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log('in the interval')
}, 1000);

console.log(__dirname); //absolute path
console.log(__filename); // absolute path with filename attached