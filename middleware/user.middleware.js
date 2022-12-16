const User = require("../database/User");
const ApiError = require("../error/ApiError");

module.exports = {
    checkIsUserExist: async (req, res, next) => {
        try {
            const {userId} = req.params;

            const user = await User.findById(userId);

            if (!user) {
                throw new ApiError('User not found', 404);
            }
            next();
            req.user = user;
        } catch (e) {
            next(e);
        }
    },
    checkIsEmailUnique: async (req, res, next) => {
        try {
            const {email} = req.body;

            if (!email){
                throw new ApiError('Email not present', 400);
            }

            const user = await User.findOne({email});

            if (user) {
                throw new ApiError('User with this email already exist', 409);
            }
            next();
            req.user = user;
        } catch (e) {
            next(e);
        }
    }
}