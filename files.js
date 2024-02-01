const fs = require('fs'); // imports the file system module

// reading a file
/*
fs.readFile('./docs/blog1.txt',  (err, data) => { // async function that takes some time to do
    if (err) {
        console.log(err)
    }
    console.log(data.toString()); // buffer is a package of data. Needs toString method
});

console.log('last line');
*/

// writing to files
/*
fs.writeFile('./docs/blog1.txt', 'hello world', () => {
    console.log('file was written')
})

fs.writeFile('./docs/blog2.txt', 'hello world', () => { // creation of new file since blog2 did not exist before
    console.log('file was written')
})
*/

// directories
/*
if (!fs.existsSync('./assests')){
   fs.mkdir('./assests', (err) => { // creates folder if this is re-ran, the error message will occur
    if (err){
        console.log(err);
        }
        console.log('folder created')
    }) 
} else {
    fs.rmdir('./assets', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('folder deleted');
    })
}
*/

// deleting files
/*
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deletem.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}
*/