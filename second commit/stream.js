const fs = require('fs');

const rs = fs.createReadStream('./myself.txt', { encoding: 'utf8' });

const ws = fs.createWriteStream('./newMyself.txt');

/*
rs.on('data', (data) => {
    ws.write(data);
});
*/

rs.pipe(ws);