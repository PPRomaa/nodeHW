const userDb = require("../database/users");
const ApiError = require("../error/ApiError");

module.exports = {
    checkIsUserExist: (req, res, next) => {
        try {
            const {userId} = req.params;

            const user = userDb[userId];

            if (!user){
                throw new ApiError('User not found',404);
            }
            next();
            req.user = user;
        }catch (e){
            next(e);
        }
    }
}