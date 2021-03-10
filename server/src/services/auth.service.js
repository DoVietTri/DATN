const bcrypt = require('bcrypt');
const userModel = require('./../models/user.model');
const JWT = require('./../helpers/jwt');

const saltRounds = 10; 

let login = async (dataLogin) => {

    //Check email is exists ?
    let user = await userModel.findByEmail(dataLogin.email);
    if (!user) {
        return { message: 'EMAIL_NOT_EXISTS' };
    }

    //Check password
    let comparePassword = await user.comparePassword(dataLogin.password);
    if (!comparePassword) {
        return { message: 'PASSWORD_IS_WRONG' };
    }

    let token = await JWT.generateToken(user._id);
    
    return { message: 'SUCCESS', token: token, userId: user._id };
}

let register = async (dataUser) => {

    //Check email exists ?
    let user = await userModel.findByEmail(dataUser.email);
    if (user) {
        return { message: 'EMAIL_EXISTS' };
    }

    let password = dataUser.password;
    let salt = bcrypt.genSaltSync(saltRounds);
    let hashPassword = bcrypt.hashSync(password, salt);

    //Delete plain password
    delete dataUser.password;

    //Append hashPassword into dataUser
    dataUser = {
        ...dataUser,
        password: hashPassword
    }

    let createNewUser = await userModel.createNewUser(dataUser);

    let token = await JWT.generateToken(createNewUser._id);
    
    return { message: 'SUCCESS', token: token};
}

module.exports = {
    login,
    register
}