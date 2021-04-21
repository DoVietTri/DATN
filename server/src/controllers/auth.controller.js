const authService = require('./../services/auth.service');

let login = async (req, res) => {
    try {
        let dataLogin = req.body;
        let userLogin = await authService.login(dataLogin);

        return res.status(200).json(userLogin);
    } catch (error) {
        return res.status(500).json(error);
    }
}

let userLogin = async (req, res) => {
    try {
        let dataLogin = req.body;
        let userLogin = await authService.userLogin(dataLogin);

        return res.status(200).json(userLogin);
    } catch (error) {
        return res.status(500).json(error);
    }
}

let register = async (req, res) => {
    try {
        let dataUser = req.body;
        let protocol = req.protocol;
        let host = req.get('host');

        let user = await authService.register(dataUser, protocol, host);

        return res.status(200).json(user);
    } catch (error) {   
        return res.status(500).json(error);
    }
}

let verifyEmail = async (req, res) => {
    try {
        let token = req.params.token;
        let verify = await authService.verifyEmail(token);
        
        return res.status(200).json(verify);
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {
    login,
    userLogin,
    register,
    verifyEmail
}