const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd - HH:mmss')} ${uuid()} ${message}\n`;
    console.log(logEvents);

    try {
        if(!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        }
        // testing
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), dateTime);
    } catch (error) {
        console.log(error);
    }
}

module.exports = { logEvents };