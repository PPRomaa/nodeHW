const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const configs = require('../config/config');
const ApiError = require("../error/ApiError");

module.exports = {
    hashPassword: (password) => bcrypt.hash(password, 10),

    comparePasswords: async (hashPassword, password) => {
        const isPasswordSame = bcrypt.compare(password, hashPassword);

        if (!isPasswordSame) {
            throw new ApiError('Wrong email or password', 400);
        }
    },

    generateAccessTokenPair: (dataToSign = {}) => {
        const accessToken = jwt.sign(dataToSign, configs.SECRET_WORD, {expiresIn: '15m'});
        const refreshToken = jwt.sign(dataToSign, configs.SECRET_REFRESH_WORD, {expiresIn: '30d'});

        return {
            accessToken,
            refreshToken
        }
    }
}