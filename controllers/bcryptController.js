const bcrypt = require('bcrypt');

const hashPassword = async (password, saltRounds) => {
    try {
        const salt = await bcrypt.genSalt(saltRounds ? saltRounds : 10);
        const hashedPassword = await bcrypt.hash(password, salt);

        return hashedPassword;
    } catch (err) {
        console.log(err);
    }
};

const comparePasswords = async (password, hashedPassword) => {
    try {
        const isMatch = await bcrypt.compare(password, hashedPassword);

        return isMatch;
    } catch (err) {
        console.log(err);
    }
};

module.exports = { hashPassword, comparePasswords };