const path = require('path');
const fs = require('fs');

const { getTime } = require('../modules/date.js');

const usersDir = path.resolve(process.cwd(), 'logs', 'users');

const logCreatedUser = user => {
    const fileDir = path.join(usersDir, 'created.txt');

    fs.appendFile(fileDir, `\nUSER CREATED: ${user._id}(${getTime()})\n`, 'utf-8', err => {
        if (err) throw err;
    });
}

const logDeletedUser = user => {
    const fileDir = path.join(usersDir, 'deleted.txt');

    fs.appendFile(fileDir, `\nUSER DELETED: ${user._id}(${getTime()})\n`, 'utf-8', err => {
        if (err) throw err;
    });
}

module.exports = { logCreatedUser, logDeletedUser };