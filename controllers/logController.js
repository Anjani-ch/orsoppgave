const path = require('path');
const fs = require('fs');

const usersDir = path.resolve(process.cwd(), 'logs', 'users');

const createdUser = user => {
    const fileDir = path.join(usersDir, 'created.txt');

    fs.appendFile(fileDir, `USER CREATED: ${user._id}\n`, 'utf-8', err => {
        if (err) throw err;
    });
}

const deletedUser = user => {
    const fileDir = path.join(usersDir, 'deleted.txt');

    fs.appendFile(fileDir, `USER DELETED: ${user._id}\n`, 'utf-8', err => {
        if (err) throw err;
    });
}

module.exports = { createdUser, deletedUser };