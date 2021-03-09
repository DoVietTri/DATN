const bcrypt = require('bcrypt');
const userModel = require('./../models/user.model');

const saltRounds = 10; 

/**
 * Replace password
 * @param {json} data 
 */
let updatePassword = async (data) => {
    let userId = data.id;

    let user = await userModel.findUserById(userId);

    if (!user) {
        return { message: 'USER_NOT_FOUND' };
    }

    let comparePass = await user.comparePassword(data.oldPassword);

    if (!comparePass) {
        return { message: 'PASSWORD_IS_WRONG' };
    }

    let salt = bcrypt.genSaltSync(saltRounds);

    let updatePass = await userModel.updatePasswordById(data.id, bcrypt.hashSync(data.newPassword, salt));

    return { message: 'SUCCESS', data: updatePass };
}

/**
 * Get all users from database
 */
let getAllUsers = async () => {

    let allUser = await userModel.getAllUsers();

    return { message: 'SUCCESS', data: allUser };
} 

let getUserById = async (id) => {
    let user = await userModel.findUserById(id);

    if (!user) {
        return { message: 'USER_NOT_FOUND' };
    }

    return { message: 'SUCCESS', data: user };
}

let deleteUser = async (data) => {
    let currentUser = await userModel.findUserById(data.currentUserId);
    let user = await userModel.findUserById(data.userId);

    if (!user) {
        return { message: 'USER_NOT_FOUND' };
    }
    
    if ( (currentUser.role === 'admin' && user.role === 'admin' ) ||
        currentUser.role === 'user' && user.role === 'user' ||
        currentUser.role === 'user' && user.role === 'admin' ) {
            return { message: 'NOT_PERMISSION' };
    }

    await userModel.deleteUser(data.userId);

    return { message: 'SUCCESS' };
}

let updateUserInfo = async (id, data) => {
    let currentUser = await userModel.findUserById(id);

    if (!currentUser) {
        return { message: 'USER_NOT_FOUND' };
    }

    await userModel.updateUserInfo(id, data);

    return { message: 'SUCCESS' };
}

module.exports = {
    updatePassword,
    getAllUsers,
    getUserById,
    deleteUser,
    updateUserInfo
}
