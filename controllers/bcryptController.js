const bcrypt = require('bcrypt');

const hashPassword = async (password, saltRounds) => {
    try {
        const salt = await bcrypt.genSalt(saltRounds ? saltRounds : 10);
        const hashedPassword = await bcrypt.hash(password, salt);

        return hashedPassword;
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Error hashing passwords' });
    }
};

const comparePasswords = async (password, hashedPassword) => {
    try {
        const isMatch = await bcrypt.compare(password, hashedPassword);

        return isMatch;
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Error comparing passwords' });
    }
};

module.exports = { hashPassword, comparePasswords };