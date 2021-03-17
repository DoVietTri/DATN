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

let register = async (req, res) => {
    try {
        let dataUser = req.body;
        let createNewUser = await authService.register(dataUser);

        return res.status(200).json(createNewUser);
    } catch (error) {   
        return res.status(500).json(error);
    }
}

module.exports = {
    login,
    register
}