const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, '/myself.txt'), 'utf-8');
        console.log(data);

        await fsPromises.writeFile(path.join(__dirname, 'newTest.txt'), 'It\'s from a function');
        await fsPromises.appendFile(path.join(__dirname, 'append.txt'), '\nIt\'s from a function');
        await fsPromises.rename(path.join(__dirname, 'newTest.txt'), path.join(__dirname, 'test.txt'));
        await fsPromises.unlink(path.join(__dirname, 'append.txt'));
    } catch (error) {
        console.error(error);
    }
}

fileOps();

/*
fs.readFile(path.join(__dirname, '/myself.txt') , 'utf-8', (err, data) => {
    if(err) throw err;
    console.log(data);
});


console.log('Is it working');

fs.writeFile(path.join(__dirname, '/test.txt') , "I write this thing from index.js file", (err) => {
    if(err) throw err;
    console.log('Writing is complete');

    fs.appendFile(path.join(__dirname, '/test.txt') , "\n And this is append file", (err) => {
        if(err) throw err;
        console.log('Append writing is complete');

        fs.rename(path.join(__dirname, '/test.txt') , path.join(__dirname, '/newTest.txt'), (err) => {
            if(err) throw err;
            console.log('rename complete');
        });
    });
});

fs.appendFile(path.join(__dirname, '/append.txt') , "This is append file", (err) => {
    if(err) throw err;
    console.log('Append writing is complete');
});

*/

process.on('uncaughtException', err => {
    console.log(`there was an uncaught error: ${err}`);
    process.exit(1);
});