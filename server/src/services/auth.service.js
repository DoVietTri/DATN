const bcrypt = require('bcrypt');
const userModel = require('./../models/user.model');
const JWT = require('./../helpers/jwt');
const { sendMail } = require('./../helpers/mail');
const { v4: uuidv4 } = require('uuid');


const saltRounds = 10;

let login = async (dataLogin) => {

    //Check email is exists ?
    let user = await userModel.findByEmail(dataLogin.email);
    if (!user) {
        return { message: 'EMAIL_NOT_EXISTS' };
    }

    if (user.role === 'user') {
        return { message: 'NOT_PERMISSION' };
    }

    //Check password
    let comparePassword = await user.comparePassword(dataLogin.password);
    if (!comparePassword) {
        return { message: 'PASSWORD_IS_WRONG' };
    }

    let token = await JWT.generateToken(user._id);

    return { message: 'SUCCESS', token: token, userId: user._id };
}

let userLogin = async (dataLogin) => {

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

    if (user.isActive === false) {
        return { message: 'NON_ACTIVE' };
    }

    let token = await JWT.generateToken(user._id);

    return { message: 'SUCCESS', token: token, userId: user._id };
}

let register = async (dataUser, protocol, host) => {

    //Check email exists ?
    let user = await userModel.findByEmail(dataUser.email);
    if (user) {
        return { message: 'EMAIL_EXISTS' };
    }

    let password = dataUser.password;
    let salt = bcrypt.genSaltSync(saltRounds);
    let hashPassword = bcrypt.hashSync(password, salt);

    // //Delete plain password
    delete dataUser.password;

    //Append hashPassword and verifyToken into dataUser
    dataUser = {
        ...dataUser,
        password: hashPassword,
        verifyToken: uuidv4()
    }

    let newUser = await userModel.createNewUser(dataUser);

    let linkVerify = `${protocol}://${host}/api/verify/${newUser.verifyToken}`;

    let send = await sendMail(dataUser.email, linkVerify);

    if (!send) {
        await userModel.deleteUser(newUser._id);
        return { message: 'FAILED_SEND_EMAIL' };
    }

    return { message: 'SUCCESS' };
}

let verifyEmail = async (token) => {
    await userModel.verify(token);
    return { message: 'ACTIVE', data: 'Tài khoản đã được kích hoạt' };
}


module.exports = {
    login,
    register,
    userLogin,
    verifyEmail
}