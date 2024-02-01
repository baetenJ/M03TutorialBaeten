const people = ['yoshi', 'ryu', 'chun-li', 'mario']
const ages = [20, 25, 30, 35]

console.log(people);

module.exports = {
    people: people,
    ages: ages
} // exports people to modules.js

/* 
module.exports = {
    people, ages
}

also functions the same as above. In the first example, there is an option to name the variables something
different. Conventially, it's good to keep them the same, so the second option is better.

*/