const { people, ages } = require('./people'); // property(s) we want access to

console.log(people, ages); // will return empty object

const os = require('os'); // imports OS module

console.log(os.platform(), os.homedir()); // information about current OS system. Comes with OS methods

