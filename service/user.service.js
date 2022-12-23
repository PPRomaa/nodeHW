const User = require("../database/User");

module.exports = {
    findByParams: async (filter = {}) => {
        return User.find(filter);
    },
    findOneByParams: async (filter = {}) => {
        return User.findOne(filter);
    },
    create: async (userInfo)=>{
        return User.create(userInfo);
    },
    updateOne: async (userId,newInfo)=>{
        return User.findByIdAndUpdate(userId, newInfo);
    },
    deleteOne: async (userId)=>{
        return User.deleteOne({_id:userId});
    },
}